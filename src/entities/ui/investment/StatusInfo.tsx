import { colors } from "@/shared";
import styled from "@emotion/styled";

export const StatusInfo = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <InfoTitleBox>시작 전</InfoTitleBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox>체험 중</InfoTitleBox>
        <InfoDetailBox>종료</InfoDetailBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox active>당첨자 발표</InfoTitleBox>
        <InfoDetailBox active>20 / 20</InfoDetailBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox>후기 작성</InfoTitleBox>
        <InfoDetailBox>0 / 20</InfoDetailBox>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitleBox>종료</InfoTitleBox>
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
