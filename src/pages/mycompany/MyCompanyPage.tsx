import { MyCompanyService } from "@/shared/hooks/services/MyCompanyService";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
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
  id: 0,
  name: string,
  regNumber: string,
  phone: string,
  email: string,
  address: string,
  category: string,
  size: string
}

const MyCompanyPage = () => {
  const myCompany = MyCompanyService();

  const [company, setCompany] = useState<Company>({
    id: 0,
    name: "",
    regNumber: "",
    phone: "",
    email: "",
    address: "",
    category: "",
    size: ""
  });

  const fetchInfo = async () => {
    const myInfo = await myCompany.myCompany();
    return myInfo;
  };

  useEffect(() => {
    fetchInfo().then((info) => setCompany(info));
  }, []);

  return (
    <CompanyContainer>
      <CompanySubContainer>
        <h1>{company.name}</h1>
        <CompanyBorder>
          <Description>
            <Title>사업자 등록 번호</Title>
            <div>{company.regNumber}</div>
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
            <div>{company.category}</div>
          </Description>
          <Description>
            <Title>기업 규모</Title>
            <div>{company.size}</div>
          </Description>
        </CompanyBorder>
        <Contact>
          기업 정보 수정을 원하시면 프로토타인 본사 (서울특별시 낭만구 낭만동
          1004) 로 연락 바랍니다.
        </Contact>
      </CompanySubContainer>
    </CompanyContainer>
  );
};

export default MyCompanyPage;
