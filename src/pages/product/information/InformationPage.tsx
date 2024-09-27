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
import { useState } from "react";
import { useProductStore } from "@/shared";
import { useNavigate } from "react-router";

interface FormInput {
  productName: string;
  contents: string;
  reqTickets: number;
  notes: string;
  category: string;
  launchedDate: string | null;
  images: File[];
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 100px;
  width: 40%;
`;

const InformationPage = () => {
  //Import Store
  const setInfo = useProductStore((state) => state.setInfo);
  const addImage = useProductStore((state) => state.addImage);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormInput>({
    productName: "",
    contents: "",
    reqTickets: 0,
    notes: "",
    category: "",
    launchedDate: "",
    images: [],
  });

  const [scheduleYet, setScheduleYet] = useState(false);

  const isFormValid = () => {
    return (
      formData.productName.trim() !== "" &&
      formData.contents.trim() !== "" &&
      formData.reqTickets > 0 &&
      formData.notes.trim() !== "" &&
      formData.category.trim() !== "" &&
      (formData.launchedDate?.trim() !== "" || scheduleYet)
    );
  };

  const handleSubmit = () => {
    const { productName, contents, reqTickets, notes, category, launchedDate } =
      formData;

    console.log(formData);
    setInfo(productName, contents, reqTickets, notes, category, launchedDate);

    if (formData.images instanceof File) addImage(formData.images);

    navigate("/product/review", { state: formData });
  };

  const handleChange = (
    field: keyof FormInput,
    value: string | number | File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
                value={formData[element.id] as string}
                onChange={(e) => handleChange(element.id, e.target.value)}
              />
            )}
            {element.type === "number" && (
              <Input
                id={element.id}
                type="number"
                placeholder={element.placeholder}
                value={formData[element.id] as string}
                onChange={(e) => handleChange(element.id, e.target.value)}
              />
            )}
            {element.type === "textarea" && (
              <InputTextarea
                value={formData[element.id] as string}
                placeholder={element.placeholder}
                setValue={(val) => handleChange(element.id, val)}
              />
            )}
            {element.type === "dropdown" && element.options && (
              <Dropdown
                items={element.options}
                setItem={(val) => handleChange(element.id, val)}
              />
            )}
            {element.type === "date" && (
              <LaunchDateWrapper>
                {scheduleYet ? (
                  <ButtonWrapper>
                    <Button onClick={() => setScheduleYet((prev) => !prev)}>
                      미정
                    </Button>
                  </ButtonWrapper>
                ) : (
                  <>
                    <InputSpecificDate
                      key={element.id}
                      date={formData.launchedDate}
                      setDate={(val) => handleChange(element.id, val)}
                    />
                    <BlueBorderButton
                      onClick={() => setScheduleYet((prev) => !prev)}
                    >
                      미정
                    </BlueBorderButton>
                  </>
                )}
              </LaunchDateWrapper>
            )}
            {element.type === "file" && <ImageQuestion />}
          </>
        ))}
        <div style={{ height: "20px" }}></div>
        {isFormValid() ? (
          <Button onClick={handleSubmit}>계속하기</Button>
        ) : (
          <Button disabled>계속하기</Button>
        )}
      </Form>
    </Container>
  );
};

export default InformationPage;
