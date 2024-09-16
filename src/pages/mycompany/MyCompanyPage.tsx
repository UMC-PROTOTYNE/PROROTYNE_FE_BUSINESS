import styled from "@emotion/styled";

const CompanyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CompanySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;
const CompanyBorder = styled.div`
  width: 600px;
  height: 100%;
  border: 1px solid gray;
  padding: 30px 150px;
`;
const Title = styled.h3`
  margin: 0px;
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
  padding: 10px;
`;
const Contact = styled.div`
  color: gray;
  margin-top: 20px;
  font-size: 14px;
`;
const MyCompanyPage = () => {
  return (
    <CompanyContainer>
      <CompanySubContainer>
        <h2>기업명</h2>
        <CompanyBorder>
          <Description>
            <Title>사업자 등록 번호</Title>
            <div>사업자</div>
          </Description>
          <Description>
            <Title>전화번호</Title>
            <div>사업자</div>
          </Description>
          <Description>
            <Title>이메일</Title>
            <div>사업자</div>
          </Description>
          <Description>
            <Title>주소</Title>
            <div>사업자시 사업자동 109호</div>
          </Description>
          <Description>
            <Title>업종</Title>
            <div>사업자</div>
          </Description>
          <Description>
            <Title>기업 규모</Title>
            <div>사업자</div>
          </Description>
        </CompanyBorder>
        <Contact>
          기업 정보 수정을 원하시면 프로토타인 본사 (서울특별시 낭만구 낭만동 1004) 로 연락 바랍니다.
        </Contact>
      </CompanySubContainer>
    </CompanyContainer>
  );
};

export default MyCompanyPage;
