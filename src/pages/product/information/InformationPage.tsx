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
  speed: number;
}

const inputs: {
  id: keyof FormInput;
  label: string;
  type: "text" | "textarea" | "number" | "dropdown" | "date" | "file" | "input";
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
      { item: "뷰티", value: "뷰티" },
      { item: "스포츠", value: "스포츠" },
      { item: "식품", value: "식품" },
      { item: "의류", value: "의류" },
      { item: "전자기기", value: "전자기기" },
      { item: "장난감", value: "장난감" },
    ],
  },
  {
    id: "launchedDate",
    label: "출시 예정일",
    type: "date",
  },
  { id: "images", label: "제품 사진", type: "file" },
  {
    id: "speed",
    label: "속도",
    type: "input",
  }
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
  align-items: center;
  height: 50px;

  margin-left: -10px;
`;

const ButtonWrapper = styled.div`
  width: 50%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 100px;
  width: 40%;
`;

const Slider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  background: #d9d9d9;
  outline: none;
  border-radius: 2px;
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 17px;
    height: 17px;
    background: blue;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: blue;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SpeedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  color: blue;
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
    speed: 0,
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

    setInfo(productName, contents, reqTickets, notes, category, launchedDate);

    if (formData.images instanceof File) addImage(formData.images);

    navigate("/product/review", { state: formData });
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      speed: Number(value),
    }));
  }
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
                value={formData[element.id] as number}
                onChange={(e) => handleChange(element.id, e.target.value)}
              />
            )}
            {element.type === "input" && (
              <>
                <SpeedContainer>
                  {formData.speed}m/s
                </SpeedContainer>
                <Slider 
                  type="range"
                  min="0"
                  max="100"
                  value={formData[element.id] as number}
                  onChange={handleSpeedChange}
                />
              </>
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
                setValue={(val) => handleChange(element.id, val)}
                selectedItem={"카테고리를 선택해주세요."}
              />
            )}
            {element.type === "date" && (
              <LaunchDateWrapper>
                {scheduleYet ? (
                  <BlueBorderButton
                    onClick={() => setScheduleYet((prev) => !prev)}
                  >
                    설정하기
                  </BlueBorderButton>
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
                      미정하기
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
