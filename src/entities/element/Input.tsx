import { colors } from "@/shared";
import styled from "@emotion/styled";
import { Button } from "./Button";

interface InputProps {
  value: string;
  setValue: (value: string) => void | ((value: number) => void);
  type?: string;
  placeholder?: string;
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
