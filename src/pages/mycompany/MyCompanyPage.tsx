import styled from "@emotion/styled";
import { useState } from "react";
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
interface Company {
  name: string;
  businessNumber: string;
  phone: string;
  email: string;
  address: string;
  industry: string;
  scale: string;
}
const MyCompanyPage = () => {
  const [company, setCompany] = useState<Company>({
    name: "기업이름",
    businessNumber: "12345abcde",
    phone: "01012345678",
    email: "hs@naver.com",
    address: "서울시 동작구 흑석동 123-12",
    industry: "식품",
    scale: "규모",
  });
  return (
    <CompanyContainer>
      <CompanySubContainer>
        <h1>{company.name}</h1>
        <CompanyBorder>
          <Description>
            <Title>사업자 등록 번호</Title>
            <div>{company.businessNumber}</div>
          </Description>
          <Description>
            <Title>전화번호</Title>
            <div>{company.phone}</div>
          </Description>
          <Description>
            <Title>이메일</Title>
            <div>{company.email}</div>
          </Description>
          <Description>
            <Title>주소</Title>
            <div>{company.address}</div>
          </Description>
          <Description>
            <Title>업종</Title>
            <div>{company.industry}</div>
          </Description>
          <Description>
            <Title>기업 규모</Title>
            <div>{company.scale}</div>
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
