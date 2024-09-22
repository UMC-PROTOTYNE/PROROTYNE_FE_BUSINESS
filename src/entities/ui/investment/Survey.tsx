import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { useState } from "react";

import { SurveyModal } from "@/widget";
import { colors } from "@/shared";

export const Survey = () => {
  const [modal, onModal] = useState<string | false>(false);

  const param = useParams();

  console.log(param.investmentId);

  const objectives: Review.Reviews["result"]["objectives"] = [
    {
      question: "매움의 정도를 기록해주세요",
      answers: [100, 200, 300, 100, 200],
    },
    {
      question: "매움의 정도를 기록해주세요",
      answers: [100, 200, 300, 100, 200],
    },
    {
      question: "매움의 정도를 기록해주세요",
      answers: [100, 200, 300, 100, 200],
    },
    {
      question: "매움의 정도를 기록해주세요",
      answers: [100, 200, 300, 100, 200],
    },
  ];

  const subjective: Review.Reviews["result"]["subjective"] = {
    question: "맛있었나요?",
    answers: [
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
      { userId: "123123", answer: "너무 맛있었어요" },
    ],
  };

  const repurchase = [1000, 300];

  const images: Review.Reviews["result"]["images"] = [
    {
      userId: "123123",
      imageUrls: [
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
      ],
    },
    {
      userId: "123123",
      imageUrls: [
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
      ],
    },
    {
      userId: "123123",
      imageUrls: [
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
      ],
    },

    {
      userId: "123123",
      imageUrls: [
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
      ],
    },
    {
      userId: "123123",
      imageUrls: [
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
      ],
    },
    {
      userId: "123123",
      imageUrls: [
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
      ],
    },
    {
      userId: "123123",
      imageUrls: [
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
        "https://prototyne.s3.ap-northeast-2.amazonaws.com/test/f38213c9-3164-4e23-b6a0-2402ea4f96c9.jpg",
      ],
    },
  ];
  return (
    <>
      {modal ? <SurveyModal onClose={() => onModal(false)} id={modal} /> : null}
      <Container>
        {objectives.map((objective, index) => {
          const answers = objective.answers.map((answer, index) => ({
            label: index + 1 + "번 응답",
            num: answer,
          }));
          return (
            <>
              <Label key={index}>{`${index + 1}. ${objective.question}`}</Label>
              <BarChart key={index} width={600} height={300} data={answers}>
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="num" fill={colors.main} barSize={30} />
              </BarChart>
            </>
          );
        })}

        <Label>{`5. ${subjective.question}`}</Label>
        <AnswerContainer>
          {subjective.answers.map((element) => {
            const copy = element as { answer: string; userId: string };
            return (
              <Answer key={copy.userId} onClick={() => onModal(copy.userId)}>
                {copy.answer}
              </Answer>
            );
          })}
        </AnswerContainer>

        <Label>6. 재구매 의사에 대해 알려주세요.</Label>
        <BarChart
          width={600}
          height={300}
          data={[
            { label: "할래요.", num: repurchase[0] },
            { label: "안할래요.", num: repurchase[1] },
          ]}
        >
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="num" fill={colors.main} barSize={30} />
        </BarChart>

        <Label>7. 첨부 이미지</Label>
        <AnswerContainer>
          {images.map((element) => (
            <>
              {element.imageUrls.map((imageUrl, index) => (
                <ImageBlock
                  key={imageUrl + index}
                  src={imageUrl}
                  onClick={() => onModal(element.userId)}
                ></ImageBlock>
              ))}
            </>
          ))}
        </AnswerContainer>
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

const ImageBlock = styled.div`
  width: 101px;
  height: 101px;

  background-image: url(${(props: { src: string }) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 5px;

  margin-right: 10px;
  margin-top: 5px;
`;
