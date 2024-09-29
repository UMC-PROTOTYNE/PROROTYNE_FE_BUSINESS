import { colors, InvestmentService } from "@/shared";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StatusInfo = () => {
  const params = useParams();

  const [investmentProgress, setInvestmentProgress] =
    useState<Investment.InvestmentProgressReqDto>();

  useEffect(() => {
    InvestmentService()
      .InvestmentProgress(params.investmentId)
      .then((result) => {
        setInvestmentProgress({ result });
      });
  }, []);

  return (
    <Wrapper>
      <InfoWrapper>
        <InfoTitleBox active={investmentProgress?.result.stage === 1}>
          시작 전
        </InfoTitleBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox active={investmentProgress?.result.stage === 2}>
          체험 중
        </InfoTitleBox>
        <InfoDetailBox active={investmentProgress?.result.stage === 2}>
          {investmentProgress?.result.stage &&
          investmentProgress?.result.stage < 3
            ? investmentProgress?.result.stage === 1
              ? "진행 전"
              : "진행 중"
            : "진행 완료"}
        </InfoDetailBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox active={investmentProgress?.result.stage === 3}>
          당첨자 발표
        </InfoTitleBox>
        <InfoDetailBox active={investmentProgress?.result.stage === 3}>
          {investmentProgress?.result.investCount} / 20
        </InfoDetailBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox active={investmentProgress?.result.stage === 4}>
          후기 작성
        </InfoTitleBox>
        <InfoDetailBox active={investmentProgress?.result.stage === 4}>
          {investmentProgress?.result.feedbackCount} / 20
        </InfoDetailBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox active={investmentProgress?.result.stage === 5}>
          종료
        </InfoTitleBox>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 130px;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const InfoTitleBox = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: ${(props) => (props.active ? colors.main : colors.gray[1])};
  color: ${colors.white};
  border-radius: 12px;
`;

const InfoDetailBox = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid ${(props) => (props.active ? colors.main : colors.gray[1])};
  color: ${(props) => (props.active ? colors.main : colors.gray[1])};
  border-radius: 8px;
`;
