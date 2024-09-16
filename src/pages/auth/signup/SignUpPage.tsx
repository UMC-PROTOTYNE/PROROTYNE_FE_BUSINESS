import styled from "@emotion/styled";
import { BlueBorderButton, SignButton } from "@/entities";
import { ComboBox } from "@/widget";
import { useState } from "react";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
`;
const SignUpSubContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Logo = styled.img`
  width: 50%;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Description = styled.h3`
  white-space: pre-wrap;
`;
const SubTitle = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;
const Input = styled.input`
  margin: 10px 0px 10px 0px;
  padding: 5px 0px;
  border: none;
  width: 100%;
  border-bottom: 1px solid gray;
`;
const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ComboBoxContainer = styled.div`
  display: flex;
`;

const SignUpPage = () => {
  const [progress, setProgress] = useState(0);
  return (
    <SignUpContainer>
      <SignUpSubContainer>
        <LogoContainer>
          <Logo src="./public/logo/defualt.png" alt="logo" />
        </LogoContainer>
        {progress === 0 ? <Description>{`시제품 등록을 위해
기업 정보가 필요해요!`}</Description> : <Description>{`아이디 비밀번호 생성`}</Description>}
        {progress === 0 ?<>
        <SubTitle>
          기업명
        </SubTitle>
        <Input placeholder="기업명을 작성해 주세요"/>
        <SubTitle>
          사업자 등록번호(10자리)
        </SubTitle>
        <Input placeholder="사업자 등록번호를 입력해 주세요"/>
        <SubTitle>
          전화번호
        </SubTitle>
        <Input placeholder="전화번호를 작성해주세요"/>
        <SubTitle>
          이메일
        </SubTitle>
        <Input placeholder="이메일을 작성해주세요"/>
        <SubTitle>
          주소
        </SubTitle>
        <AddressContainer>
          <Input placeholder="우편번호"/>
          <BlueBorderButton width="150px" height="15px">주소 찾기</BlueBorderButton>
        </AddressContainer>
        <Input placeholder="상세 주소"/>
        <ComboBoxContainer>
          <ComboBox type="businessType"/>
          <ComboBox type="size"/>
        </ComboBoxContainer>
        <SignButton onClick={() => setProgress(progress + 1)}>계속하기</SignButton> </>:
        <>
        <SubTitle>
          아이디
        </SubTitle>
        <AddressContainer>
          <Input placeholder="8자 이상, 대,소문자, 숫자"/>
          <BlueBorderButton width="150px" height="15px">중복 확인</BlueBorderButton>
        </AddressContainer>
        <SubTitle>
          비밀번호
        </SubTitle>
        <Input placeholder="특수문자 포함 10자 이상"/>
        <SubTitle>
          비밀번호 확인
        </SubTitle>
        <Input placeholder="다시 한번 입력해주세요"/>
        <SignButton>회원가입 완료</SignButton>
        </>}
      </SignUpSubContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
