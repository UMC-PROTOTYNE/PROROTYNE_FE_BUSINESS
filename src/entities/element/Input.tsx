import styled from "@emotion/styled";
import { colors, useProductStore } from "@/shared";
import { Button } from "./Button";

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

interface InputSpecificDateProps {
  date: string;
  setDate: (date: string) => void;
  type?: string;
  placeholder?: string;
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

export const InputSpecificDate = ({
  date,
  setDate,
}: InputSpecificDateProps) => {
  return (
    <InputWrapper>
      <InputDatePickerWrapper>
        <input
          {...{
            type: "date",
            value: date,
            onChange: (e) => setDate(e.target.value),
          }}
        />
      </InputDatePickerWrapper>
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

export const ImageQuestion = () => {
  const addImage = useProductStore((state) => state.addImage);
  const images = useProductStore((state) => state.images);

  console.log(images);

  return (
    <>
      <ImageContainer>
        {images.map((image, index) => (
          <ImageBlock key={index} src={URL.createObjectURL(image)}></ImageBlock>
        ))}
        {images.length < 3 ? (
          <>
            <AddImageBlock htmlFor="upload">+</AddImageBlock>
            <input
              type="file"
              id="upload"
              style={{ display: "none" }}
              name="upload"
              accept="image/*"
              capture="environment"
              onChange={(event) => {
                console.log("!!");
                if (event.target.files) addImage(event.target.files[0]);
              }}
            ></input>
          </>
        ) : null}
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: flex-start;

  margin-top: 8px;
`;

const ImageBlock = styled.div`
  width: 101px;
  height: 101px;

  background-image: url(${(props: { src: string }) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 10px;

  margin-right: 10px;
`;

const AddImageBlock = styled.label`
  width: 101px;
  height: 101px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;

  background-color: #d9d9d9;

  border-radius: 10px;

  color: white;
`;
