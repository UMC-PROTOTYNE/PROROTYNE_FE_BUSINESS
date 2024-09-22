import { StatusInfo } from "@/entities";
import { colors, InvestmentService } from "@/shared";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InformationPage = () => {
  const params = useParams();

  const [info, setInfo] = useState<Investment.InvestmentInfoReqDto>();

  useEffect(() => {
    InvestmentService()
      .InvestmentInfo(params.investmentId)
      .then((result) => {
        setInfo({ result });
      });
  }, []);

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <Wrapper>
      <Title>체험 현황 및 관리</Title>
      <StatusInfo />
      <RouteWrapper>
        <AnswerContainer>
          {info?.result.productImages.map((element, index) => (
            <ImageBlock key={index} src={element}></ImageBlock>
          ))}
        </AnswerContainer>
        <div>
          <h3>시제품 명</h3>
          <p>{info?.result.productInfo.productName}</p>
        </div>
        <div>
          <h3>설명</h3>
          <p>{info?.result.productInfo.contents}</p>
        </div>
        <div>
          <h3>카테고리</h3>
          <p>{info?.result.productInfo.category}</p>
        </div>
        <div>
          <h3>티켓 개수</h3>
          <p>{info?.result.productInfo.reqTickets}개</p>
        </div>
        <div>
          <h3>추가 안내사항</h3>
          <p>{info?.result.productInfo.notes}</p>
        </div>
        <hr />
        <div>
          <h3>체험 모집 기간</h3>
          <p>
            {info?.result.dates.eventStart} ~ {info?.result.dates.eventEnd}
          </p>
        </div>
        <div>
          <h3>대상자 발표일</h3>
          <p>
            {info?.result.dates.releaseStart} ~ {info?.result.dates.releaseEnd}
          </p>
        </div>
        <div>
          <h3>후기 작성 기간</h3>
          <p>
            {info?.result.dates.feedbackStart} ~{" "}
            {info?.result.dates.feedbackEnd}
          </p>
        </div>
      </RouteWrapper>
    </Wrapper>
  );
};

export default InformationPage;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: flex-start !important;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RouteWrapper = styled.div`
  border: 1px solid ${colors.gray[1]};
  display: flex;
  flex-direction: column;
  height: 45vh;
  padding: 50px 100px;
  overflow-y: auto;
  gap: 20px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    border: 1px solid ${colors.gray[1]};
    margin: 20px 0;
  }
`;
