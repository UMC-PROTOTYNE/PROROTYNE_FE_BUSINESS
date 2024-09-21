import { useState } from "react";
import styled from "@emotion/styled";

import { GrayBackground } from "@/entities";
import { colors } from "@/shared";

export const SurveyModal = ({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) => {
  const [spicyLevel] = useState<string>("1");

  return (
    <GrayBackground onClose={onClose}>
      <Container>
        <Title>
          신청자 설문 결과<div>신청자 ID: {id}</div>
        </Title>
        <Question>
          <Label>1. 매운 맛의 정도는 어떤가요?</Label>
          <RadioGroup>
            {["1", "2", "3", "4", "5"].map((level) => (
              <RadioButton key={level} selected={spicyLevel === level}>
                <input
                  type="radio"
                  name="spicyLevel"
                  value={level}
                  checked={spicyLevel === level}
                />
                {level}
              </RadioButton>
            ))}
          </RadioGroup>
        </Question>
        <Question>
          <Label>5. 맛이 어떤가요?</Label>
          <TextArea>몰라요</TextArea>
        </Question>
        <ButtonGroup>
          <Button primary>확인 완료</Button>
          <Button>페널티 부여</Button>
        </ButtonGroup>
      </Container>
    </GrayBackground>
  );
};

const Container = styled.div`
  width: 85%;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;

  > div {
    font-size: 13px;
    color: ${colors.gray[1]};
    margin-top: 5px;
  }
`;

const Question = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const RadioGroup = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RadioButton = styled.label<{ selected: boolean }>`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${({ selected }) => (selected ? colors.main : colors.gray[1])};

  input {
    margin-right: 8px;
  }
`;

const TextArea = styled.div`
  width: 95%;
  height: 80px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: ${({ primary }) => (primary ? colors.main : colors.error)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
