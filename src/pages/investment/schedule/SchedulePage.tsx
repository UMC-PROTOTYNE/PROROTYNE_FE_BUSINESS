import styled from "@emotion/styled";
import { InputDatePicker, Button } from "@/entities";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InvestmentService } from "@/shared";

interface FormInput {
  start: string;
  end: string;
}

const inputs: {
  id: string;
  label: string;
  description: string;
}[] = [
  {
    id: "applicationPeriod",
    label: "체험 신청자 모집 기간",
    description: `체험 신청자를 모집하는 기간입니다.
      해당 기간에는 프로토타인 회원들이 해당 시제품 체험 정보를 조회하고 신청할 수 있습니다. `,
  },
  {
    id: "winningPeriod",
    label: "체험 당첨자 발표 기간",
    description: "체험 신청자들 중 회원 대상자를 발표하는 날짜입니다. ",
  },
  {
    id: "reviewPeriod",
    label: "후기 작성 기간",
    description:
      " 체험 대상자들이 후기를 작성하는 기간입니다.\n대상자들이 충분히 시제품을 사용하고 작성할 수 있도록 배송기간 사이에 적절한 텀을 두는 것이 좋습니다. ",
  },
];

const SchedulePage = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm<FormInput>();
  const [dates, setDates] = useState<{
    [key: string]: { start: string; end: string };
  }>({
    applicationPeriod: { start: "", end: "" },
    winningPeriod: { start: "", end: "" },
    reviewPeriod: { start: "", end: "" },
  });
  const [isInvalid, setIsinvalid] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleDateChange = (
    id: string,
    field: "start" | "end",
    value: string
  ) => {
    setDates((prevDates) => ({
      ...prevDates,
      [id]: {
        ...prevDates[id],
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    const newErrors: { [key: string]: string } = {};

    Object.keys(dates).forEach((key) => {
      const { start, end } = dates[key];

      if (start && end && new Date(start) > new Date(end)) {
        newErrors[key] = `${
          inputs.find((input) => input.id === key)?.label
        }의 종료 날짜가 시작 날짜보다 앞설 수 없습니다. `;
        setIsinvalid(true);
      }
    });

    setErrors(newErrors);
  }, [dates]);

  const onSubmit: SubmitHandler<FormInput> = () => {
    InvestmentService()
      .createInvestment("1", {
        eventStart: dates.applicationPeriod.start,
        eventEnd: dates.applicationPeriod.end,
        releaseStart: dates.winningPeriod.start,
        releaseEnd: dates.winningPeriod.end,
        feedbackStart: dates.reviewPeriod.start,
        feedbackEnd: dates.reviewPeriod.end,
      })
      .then(() => {
        navigate("/home", { replace: true });
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <PageTitle>시제품명-마라탕후루</PageTitle>
        {inputs.map((element) => (
          <>
            <InputDatePicker
              key={element.id}
              title={element.label}
              date1={dates[element.id].start}
              setDate1={(date) => handleDateChange(element.id, "start", date)}
              date2={dates[element.id].end}
              setDate2={(date) => handleDateChange(element.id, "end", date)}
            ></InputDatePicker>
            {errors[element.id] && <Error>{errors[element.id]}</Error>}

            <Description>{element.description}</Description>
          </>
        ))}
        <div style={{ height: "20px" }}></div>
        <Button>계속하기</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 100px;
  width: 40%;
`;

const PageTitle = styled.h2`
  white-space: pre-wrap;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 11px;
  color: #090909;
  padding-left: 10px;
  white-space: pre-line;
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  padding-left: 10px;
`;

export default SchedulePage;
