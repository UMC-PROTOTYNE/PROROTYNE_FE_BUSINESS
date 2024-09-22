import styled from "@emotion/styled";
import { Button, Input } from "@/entities";

import { SubmitHandler, useForm } from "react-hook-form";

interface FormInput {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
}

const inputs: {
  id: keyof FormInput;
  label: string;
}[] = [
  { id: "question1", label: "질문 1 - 객관식 (1점 ~ 5점)" },
  { id: "question2", label: "질문 2 - 객관식 (1점 ~ 5점)" },
  { id: "question3", label: "질문 3 - 객관식 (1점 ~ 5점)" },
  { id: "question4", label: "질문 4 - 객관식 (1점 ~ 5점)" },
  { id: "question5", label: "질문 5 - 주관식" },
];

const ReviewPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Description>시제품 추가 2/2</Description>

        {inputs.map((element) => (
          <>
            <Label key={element.id} htmlFor={element.id}>
              {element.label}
            </Label>
            <Input
              key={element.id}
              id={element.id}
              placeholder="30자 이내로 입력하세요"
              {...register(element.id, {
                required: "필수 항목을 입력해주세요.",
                maxLength: {
                  value: 30,
                  message: "30자 이하로 입력해주세요.",
                },
              })}
            />
            {errors[element.id] ? (
              <Error key={element.id}>{errors[element.id]!.message}</Error>
            ) : null}
          </>
        ))}
        <div style={{ height: "20px" }}></div>
        <Button>저장하기</Button>
      </Form>
    </Container>
  );
};

export default ReviewPage;

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

const Description = styled.h2`
  white-space: pre-wrap;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 20px;
`;

const Error = styled.span`
  color: red;
  font-size: 13px;
`;
