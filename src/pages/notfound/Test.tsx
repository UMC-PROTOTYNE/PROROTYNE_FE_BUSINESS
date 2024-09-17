import { useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  Dropdown,
  InputDefault,
  InputButton,
  InputTitle,
  InputDatePicker,
} from "@/entities";
import { colors } from "@/shared";

const Test = () => {
  const [inputDefault, setInputDefault] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputButton, setInputButton] = useState("");
  const [inputDatePicker1, setInputDatePicker1] = useState("");
  const [inputDatePicker2, setInputDatePicker2] = useState("");

  return (
    <>
      {`import {
        Button,
        Dropdown,
        InputDefault,
        InputButton,
        InputTitle,
        InputDatePicker
      } from "@/entities";`}

      {/* Buttons */}
      {/* 부모 컴포넌트의 크기 상속 */}
      <Buttons>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit success");
          }}
        >
          <Button // 이 경우 onClick 이벤트가 있으므로 submit 작동 안함
            onClick={() => {
              console.log("Default");
            }}
          >
            Default
          </Button>
          <Button disabled>Default-disabled</Button>
          <Button // 이 경우 Button에 onClick 이벤트가 없으므로 submit 작동
            variant="outlined"
          >
            Outlined
          </Button>
          <Button variant="outlined" disabled>
            Outlined-disabled
          </Button>
        </form>
      </Buttons>

      {/* Dropdown */}
      <DropdownWrapper>
        <Dropdown
          items={[
            { item: "item1", value: "value1" },
            { item: "item2", value: "value2" },
            { item: "item3", value: "value3" },
          ]}
          setItem={(value) => {
            console.log(value);
          }}
        />
      </DropdownWrapper>

      {/* Inputs */}
      <InputWrapper>
        <InputDefault
          {...{
            value: inputDefault,
            setValue: setInputDefault,
            placeholder: "InputDefault",
          }}
        />
        <InputTitle
          {...{
            value: inputTitle,
            setValue: setInputTitle,
            title: "title",
            placeholder: "IpuntTitle",
          }}
        />
        <InputButton
          {...{
            value: inputButton,
            setValue: setInputButton,
            title: "title",
            buttonTitle: "button",
            placeholder: "InputButton",
            onClick: () => {
              console.log("button clicked");
            },
          }}
        />
        <InputDatePicker
          {...{
            title: "title",
            date1: inputDatePicker1,
            setDate1: setInputDatePicker1,
            date2: inputDatePicker2,
            setDate2: setInputDatePicker2,
          }}
        />
      </InputWrapper>
      <ColorPalette>
        {"import { colors } from '@/shared'"}
        <div>
          <Color color={colors.main} />
          <p>colors.main</p>
        </div>
        <div>
          <Color color={colors.sub} />
          <p>colors.sub</p>
        </div>
        <div>
          <Color color={colors.back} />
          <p>colors.back</p>
        </div>
        <div>
          <Color color={colors.black} />
          <p>colors.black</p>
        </div>
        <div>
          <Color color={colors.white} />
          <p>colors.white</p>
        </div>
        <div>
          <Color color={colors.gray[1]} />
          <p>colors.gray[1]</p>
        </div>
        <div>
          <Color color={colors.gray[2]} />
          <p>colors.gray[2]</p>
        </div>
        <div>
          <Color color={colors.gray[3]} />
          <p>colors.gray[3]</p>
        </div>
        <div>
          <Color color={colors.gray[4]} />
          <p>colors.gray[4]</p>
        </div>
        <div>
          <Color color={colors.gray[5]} />
          <p>colors.gray[5]</p>
        </div>
      </ColorPalette>
    </>
  );
};

export default Test;

const Buttons = styled.div`
  margin-top: 50px;
  & form {
    display: flex;
    gap: 10px;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  height: 30px;
  width: 152px;
  margin-top: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;

const ColorPalette = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Color = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;
