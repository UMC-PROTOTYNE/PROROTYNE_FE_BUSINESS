import styled from "@emotion/styled";
import { BlueBorderButton } from "@/entities";
import { useNavigate } from "react-router";
import { PAGE_URL } from "@/shared";

const PrototypeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 5px 0px;
`;
const Image = styled.img`
  margin: 0px 10px 0px 10px;
  width: 180px;
  height: 180px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  margin: 0px;
  cursor: pointer;
`;
const Description = styled.div`
  margin: 5px 0px;
  font-size: 14px;
`;
const Name = styled.h3`
  margin: 5px 0px;
`;
const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  justify-content: center;
`;
const DeleteButton = styled.button`
  margin-left: auto;
  font-size: 12px;
  color: #a5a5a5;
  margin-top: 10px;
  cursor: pointer;
`;

interface PrototypeInfo {
  isPrototype: boolean;
  image: string;
  name: string;
  ticket?: number;
  step?: string;
  regist: string;
  category: string;
  ongoing?: number;
  releaseDate?: string;
  terminateDate?: string;
  eventId?: number;
}
export const Prototype = ({
  isPrototype,
  image,
  name,
  ticket,
  step,
  regist,
  category,
  ongoing,
  releaseDate,
  terminateDate,
  eventId,
}: PrototypeInfo) => {
  const navigate = useNavigate();

  return (
    <PrototypeContainer>
      <Image src={image} />
      <DescriptionContainer
        onClick={() => navigate(`/investment/${eventId}/info`)}
      >
        <Name>{name}</Name>
        {isPrototype ? (
          <Description>티켓: {ticket}개</Description>
        ) : (
          <Description>단계: {step}</Description>
        )}
        <Description>등록일: {regist}</Description>
      </DescriptionContainer>
      <DescriptionContainer>
        <Description>카테고리: {category}</Description>
        {isPrototype ? (
          <>
            <Description>진행 중인 체험: {ongoing}개</Description>
            <Description>출시 예정일: {releaseDate}</Description>
          </>
        ) : (
          <Description>신청자 모집 종료: {terminateDate}</Description>
        )}
      </DescriptionContainer>
      <ButtonContainer>
        <BlueBorderButton
          onClick={() => {
            isPrototype
              ? navigate(PAGE_URL.InvestmentSchedule)
              : navigate("/investment/1/info");
          }}
        >
          {isPrototype ? "체험 생성" : "체험 관리"}
        </BlueBorderButton>
        <DeleteButton>삭제하기</DeleteButton>
      </ButtonContainer>
    </PrototypeContainer>
  );
};

export default Prototype;
