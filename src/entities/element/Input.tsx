import styled from "@emotion/styled";
import { colors } from "@/shared";
import { Button } from "./Button";
import { useState } from "react";

export const Input = styled.input`
  margin: 10px 0px 10px 0px;
  padding: 5px 0px;
  border: none;
  width: 100%;
  border-bottom: 1px solid gray;
`;

interface InputProps {
  value: string;
  setValue: (value: string) => void | ((value: number) => void);
  type?: string;
  placeholder?: string;
}

interface TextareaProps {
  value: string;
  setValue: (value: string) => void | ((value: number) => void);
  placeholder?: string;
  rows?: number;
}

interface InputTitleProps extends InputProps {
  title: string;
}

interface InputButtonProps extends InputProps {
  title: string;
  buttonTitle: string;
  onClick: () => void | ((value: string) => void) | ((value: number) => void);
}

interface InputDatePickerProps {
  title: string;
  date1: string;
  setDate1: (date: string) => void;
  date2: string;
  setDate2: (date: string) => void;
  type?: string;
  placeholder?: string;
}

interface InputImageProps {
  title: string;
  setFile: (files: File[]) => void;
}

export const InputDefault = ({
  value,
  setValue,
  type,
  placeholder,
}: InputProps) => {
  return (
    <InputWrapper>
      <input
        {...{
          placeholder,
          type: type || "text",
          value,
          onChange: (e) => setValue(e.target.value),
        }}
      />
    </InputWrapper>
  );
};

export const InputTextarea = ({
  value,
  setValue,
  placeholder,
  rows = 3,
}: TextareaProps) => {
  return (
    <InputWrapper>
      <Textarea
        {...{
          placeholder,
          value,
          rows,
          onChange: (e) => setValue(e.target.value),
        }}
      />
    </InputWrapper>
  );
};

export const InputTitle = ({
  value,
  setValue,
  title,
  type,
  placeholder,
}: InputTitleProps) => {
  return (
    <InputWrapper>
      <Title>{title}</Title>
      <input
        {...{
          placeholder,
          type: type || "text",
          value,
          onChange: (e) => setValue(e.target.value),
        }}
      />
    </InputWrapper>
  );
};

export const InputButton = ({
  value,
  setValue,
  title,
  type,
  buttonTitle,
  placeholder,
  onClick,
}: InputButtonProps) => {
  return (
    <InputWrapper>
      <Title>{title}</Title>
      <div>
        <input
          {...{
            placeholder,
            type: type || "text",
            value,
            onChange: (e) => setValue(e.target.value),
          }}
          style={{ flex: 4 }}
        />
        <ButtonWrapper>
          <Button variant="outlined" onClick={() => onClick()}>
            <p>{buttonTitle}</p>
          </Button>
        </ButtonWrapper>
      </div>
    </InputWrapper>
  );
};

export const InputDatePicker = ({
  title,
  date1,
  setDate1,
  date2,
  setDate2,
}: InputDatePickerProps) => {
  return (
    <InputWrapper>
      <Title>{title}</Title>
      <InputDatePickerWrapper>
        <input
          {...{
            type: "date",
            value: date1,
            onChange: (e) => setDate1(e.target.value),
          }}
        />
        {" ~ "}
        <input
          {...{
            type: "date",
            value: date2,
            onChange: (e) => setDate2(e.target.value),
          }}
        />
      </InputDatePickerWrapper>
    </InputWrapper>
  );
};

export const InputImage = ({ setFile }: InputImageProps) => {
  const [previews, setPreview] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setFile(files);
    if (files.length > 0) {
      const previews = files.map((file) => URL.createObjectURL(file));
      setPreview(previews);
    } else {
      setPreview([]);
    }
  };
  return (
    <InputWrapper>
      <ImageWrapper>
        {previews.map((preview, index) => (
          <ImagePreview key={index}>
            <img src={preview} alt={`uploaded-${index}`} />
          </ImagePreview>
        ))}
        <UploadButton>
          <input
            type="file"
            accept="image/*"
            multiple // 여러 파일을 선택할 수 있게 설정
            onChange={handleImageUpload}
          />
          <PlusIcon>+</PlusIcon>
        </UploadButton>
      </ImageWrapper>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 6px;
  width: 100%;
  & input {
    padding: 5px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.gray[2]};

    ::placeholder {
      color: ${colors.gray[2]};
    }
  }
  & div {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.gray[2]};
  border-radius: 4px;
  resize: none; /* 사용자가 크기를 변경할 수 있도록 설정 */
  outline: none;

  ::placeholder {
    color: ${colors.gray[2]};
  }
`;

const Title = styled.h2`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  height: 23px;
  & button p {
    font-size: 10px;
    font-weight: normal;
  }
`;

const InputDatePickerWrapper = styled.p`
  width: 100%;
  margin: 0;
  & input {
    padding: 5px 10px;
    width: 100px;
    border: 1px solid ${colors.gray[2]};
    border-radius: 5px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ImagePreview = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UploadButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e0e0e0;
  border-radius: 10px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const PlusIcon = styled.div`
  font-size: 32px;
  color: #fff;
`;
