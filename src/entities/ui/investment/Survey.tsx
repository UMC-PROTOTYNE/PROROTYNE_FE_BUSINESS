import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import styled from "@emotion/styled";
import { useState } from "react";

import { SurveyModal } from "@/widget";
import { colors } from "@/shared";

export const Survey = () => {
  const [modal, onModal] = useState<string | false>(false);

  const data = [
    {
      question: "매움의 정도를 기록해주세요",
      answers: [
        { label: "1번 응답", num: 100 },
        { label: "2번 응답", num: 100 },
        { label: "3번 응답", num: 300 },
        { label: "4번 응답", num: 100 },
        { label: "5번 응답", num: 200 },
      ],
    },
    {
      question: "매움의 정도를 기록해주세요",
      answers: [
        { label: "1번 응답", num: 100 },
        { label: "2번 응답", num: 100 },
        { label: "3번 응답", num: 300 },
        { label: "4번 응답", num: 100 },
        { label: "5번 응답", num: 200 },
      ],
    },
    {
      question: "매움의 정도를 기록해주세요",
      answers: [
        { label: "1번 응답", num: 100 },
        { label: "2번 응답", num: 100 },
        { label: "3번 응답", num: 300 },
        { label: "4번 응답", num: 100 },
        { label: "5번 응답", num: 200 },
      ],
    },
    {
      question: "매움의 정도를 기록해주세요",
      answers: [
        { label: "1번 응답", num: 100 },
        { label: "2번 응답", num: 100 },
        { label: "3번 응답", num: 300 },
        { label: "4번 응답", num: 100 },
        { label: "5번 응답", num: 200 },
      ],
    },
    {
      question: "맛있었나요?",
      answers: [
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
        { id: "123123", answer: "너무 맛있었어요" },
      ],
    },
  ];

  return (
    <>
      {modal ? <SurveyModal onClose={() => onModal(false)} id={modal} /> : null}
      <Container>
        {data.map((element, index) =>
          index < 4 ? (
            <>
              <Label key={index}>{`${index + 1}. ${element.question}`}</Label>
              <BarChart
                key={index}
                width={600}
                height={300}
                data={element.answers}
              >
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="num" fill={colors.main} barSize={30} />
              </BarChart>
            </>
          ) : (
            <>
              <Label key={index}>{`${index + 1}. ${element.question}`}</Label>
              <AnswerContainer key={index}>
                {element.answers.map((element) => {
                  const copy = element as { answer: string; id: string };
                  return (
                    <Answer key={copy.id} onClick={() => onModal(copy.id)}>
                      {copy.answer}
                    </Answer>
                  );
                })}
              </AnswerContainer>
            </>
          )
        )}
      </Container>
    </>
  );
};

const Container = styled.main`
  padding-top: 20px;
  padding-left: 30px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 17px;
  margin-top: 10px;
  margin-left: 20px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 10px;
  margin-bottom: 30px;
  margin-left: 20px;
`;

const Answer = styled.div`
  border: 1px solid ${colors.gray[1]};
  font-weight: bold;
  border-radius: 2px;
  padding: 5px;
`;
