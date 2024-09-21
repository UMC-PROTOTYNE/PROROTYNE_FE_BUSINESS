import styled from "@emotion/styled";
import { Button, Input, Dropdown, InputTextarea, InputImage } from "@/entities";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface FormInput {
  productName: string;
  description: string;
  ticketCount: number;
  appendDescription: string;
  category: string;
  image: File;
}

const inputs: {
  id: keyof FormInput;
  label: string;
  type: "text" | "textarea" | "number" | "dropdown" | "file";
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
    id: "description",
    label: "설명",
    type: "textarea",
    placeholder: "시제품에 대해서 설명해주세요.",
  },
  {
    id: "ticketCount",
    label: "티켓 개수",
    type: "number",
    placeholder: "티켓 개수를 입력해주세요.",
  },
  {
    id: "appendDescription",
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
  { id: "image", label: "제품 사진", type: "file" },
];

//뷰티, 스포츠, 식품, 의류, 전자기기, 장난감

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

const InformationPage = () => {
  const { register, handleSubmit, watch, setValue } = useForm<FormInput>();
  const [selectedValue, setSelectedValue] = useState("");
  //const [imageFile, setImageFile] = useState<File | null>(null);

  //const productImage = watch("image");

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
              />
            )}
            {element.type === "textarea" && (
              <InputTextarea
                value={watch(element.id) as string}
                setValue={(val) => setValue(element.id, val)}
                placeholder={element.placeholder}
              />
            )}
            {element.type === "dropdown" && element.options && (
              <Dropdown items={element.options} setItem={setSelectedValue} />
            )}
            {element.type === "file" && <>productImage</>}
          </>
        ))}
        <Button>계속하기</Button>
      </Form>
    </Container>
  );
};

export default InformationPage;
