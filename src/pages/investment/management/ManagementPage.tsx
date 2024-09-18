import { StatusInfo } from "@/entities";
import styled from "@emotion/styled";

const ManagementPage = () => {
  return (
    <Wrapper>
      <Title>체험 현황 및 관리</Title>
      <StatusInfo />
    </Wrapper>
  );
};

export default ManagementPage;

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
