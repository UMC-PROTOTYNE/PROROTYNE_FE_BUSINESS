import styled from "@emotion/styled";
import {
  Container,
  Button,
  BlueBorderButton,
  Input,
  Dropdown,
  InputTextarea,
  InputSpecificDate,
  ImageQuestion,
} from "@/entities";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

import { useProductStore } from "@/shared";
import { useNavigate } from "react-router";

interface FormInput {
  productName: string;
  contents: string;
  reqTickets: number;
  notes: string;
  category: string;
  launchedDate: string;
  images: File;
}

const inputs: {
  id: keyof FormInput;
  label: string;
  type: "text" | "textarea" | "number" | "dropdown" | "date" | "file";
  placeholder?: string;
  options?: { item: string; value: string }[];
}[] = [
  {
    id: "productName",
    label: "시제품 명",
    type: "text",
    placeholder: "15자 이내로 입력하세요.",
  },
  {
    id: "contents",
    label: "설명",
    type: "textarea",
    placeholder: "시제품에 대해서 설명해주세요.",
  },
  {
    id: "reqTickets",
    label: "티켓 개수",
    type: "number",
    placeholder: "티켓 개수를 입력해주세요.",
  },
  {
    id: "notes",
    label: "추가 안내사항",
    type: "textarea",
    placeholder: "추가 안내사항에 대해 입력해주세요.",
  },
  {
    id: "category",
    label: "카테고리",
    type: "dropdown",
    options: [
      { item: "뷰티", value: "beauty" },
      { item: "스포츠", value: "sports" },
      { item: "식품", value: "food" },
      { item: "의류", value: "clothes" },
      { item: "전자기기", value: "electronic" },
      { item: "장난감", value: "toy" },
    ],
  },
  {
    id: "launchedDate",
    label: "출시 예정일",
    type: "date",
  },
  { id: "images", label: "제품 사진", type: "file" },
];

//뷰티, 스포츠, 식품, 의류, 전자기기, 장난감

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

const LaunchDateWrapper = styled.div`
  display: flex;
  flex-dirction: row;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  text-align: ;
`;

const InformationPage = () => {
  //Import Store
  const setInfo = useProductStore((state) => state.setInfo);
  const addImage = useProductStore((state) => state.addImage);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, setValue } = useForm<FormInput>();
  const [selectedValue, setSelectedValue] = useState("");
  const [dates, setDates] = useState<string>("");
  const [buttonToggle, setButtonToggle] = useState(false);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setInfo(
      data.productName,
      data.contents,
      data.reqTickets,
      data.notes,
      selectedValue,
      buttonToggle ? null : dates
    );

    if (data.images instanceof File) addImage(data.images);

    console.log(data);
    navigate("/product/review");
  };

  const handleButtonClick = () => {
    setButtonToggle((prev) => !prev);
  };

  return (
    <Container>
      <Form>
        <Description>시제품 추가 1/2</Description>
        {inputs.map((element) => (
          <>
            <Label key={element.id} htmlFor="element.id">
              {element.label}
            </Label>
            {element.type === "text" && (
              <Input
                id={element.id}
                placeholder={element.placeholder}
                {...register(element.id, {
                  maxLength: {
                    value: 15,
                    message: "15자 이하로 입력해주세요.",
                  },
                })}
              />
            )}
            {element.type === "number" && (
              <Input
                id={element.id}
                type="number"
                placeholder={element.placeholder}
                {...register(element.id)}
              />
            )}
            {element.type === "textarea" && (
              <InputTextarea
                value={watch(element.id) as string}
                setValue={(val) => setValue(element.id, val)}
                placeholder={element.placeholder}
                {...register(element.id)}
              />
            )}
            {element.type === "dropdown" && element.options && (
              <Dropdown
                items={element.options}
                setItem={setSelectedValue}
                {...register(element.id)}
              />
            )}
            {element.type === "date" && (
              <LaunchDateWrapper>
                {!buttonToggle && (
                  <InputSpecificDate
                    key={element.id}
                    date={dates}
                    setDate={setDates}
                    {...register(element.id)}
                  />
                )}
                {buttonToggle ? (
                  <ButtonWrapper>
                    <Button onClick={handleButtonClick}>미정</Button>
                  </ButtonWrapper>
                ) : (
                  <BlueBorderButton onClick={handleButtonClick}>
                    미정
                  </BlueBorderButton>
                )}
              </LaunchDateWrapper>
            )}
            {element.type === "file" && <ImageQuestion />}
          </>
        ))}
        <div style={{ height: "20px" }}></div>

        <Button onClick={handleSubmit(onSubmit)}>계속하기</Button>
      </Form>
    </Container>
  );
};

export default InformationPage;
