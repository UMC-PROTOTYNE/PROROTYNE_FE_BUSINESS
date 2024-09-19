import styled from "@emotion/styled";
import { BlueBorderButton, SignButton, Input } from "@/entities";
import { ComboBox } from "@/widget";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

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

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ComboBoxContainer = styled.div`
  display: flex;
`;

const AddressDetailBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddressDetailContainer = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #D9D9D9;
`;

const SignUpPage = () => {
  const [progress, setProgress] = useState(0);
  const [address, setAddress] = useState(false);
  const [inputAddress, setInputAddress] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  return (
    <SignUpContainer>
      <SignUpSubContainer>
        {address && (
          <AddressDetailBackground onClick={() => {
              setAddress(false);
            }
          }>
            <AddressDetailContainer>
              <DaumPostcode onComplete={(data) => {
                setAddress(false);
                setInputAddress(data.address);
              }}/>
            </AddressDetailContainer>
          </AddressDetailBackground>
        )}
        <LogoContainer>
          <Logo src="./public/logo/defualt.png" alt="logo" />
        </LogoContainer>
        {progress === 0 ? <Description>{`시제품 등록을 위해
기업 정보가 필요해요!`}</Description> : <Description>{`아이디 비밀번호 생성`}</Description>}
        {progress === 0 ?<>
        <SubTitle>
          기업명
        </SubTitle>
        <Input placeholder="기업명을 작성해 주세요" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
        <SubTitle>
          사업자 등록번호(10자리)
        </SubTitle>
        <Input placeholder="사업자 등록번호를 입력해 주세요" value={businessNumber} onChange={(e) => setBusinessNumber(e.target.value)}/>
        <SubTitle>
          전화번호
        </SubTitle>
        <Input placeholder="전화번호를 작성해주세요" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <SubTitle>
          이메일
        </SubTitle>
        <Input placeholder="이메일을 작성해주세요" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <SubTitle>
          주소
        </SubTitle>
        <AddressContainer>
          <Input placeholder="우편번호" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)}/>
          <BlueBorderButton width="150px" height="15px" onClick={() => setAddress(true)}>주소 찾기</BlueBorderButton>
        </AddressContainer>
        <Input placeholder="상세 주소" value={detailedAddress} onChange={(e) => setDetailedAddress(e.target.value)}/>
        <ComboBoxContainer>
          <ComboBox type="businessType"/>
          <ComboBox type="size"/>
        </ComboBoxContainer>
        <SignButton onClick={() => setProgress(progress + 1)}>계속하기</SignButton> </> :
        <>
        <SubTitle>
          아이디
        </SubTitle>
        <AddressContainer>
          <Input placeholder="8자 이상, 대,소문자, 숫자" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <BlueBorderButton width="150px" height="15px">중복 확인</BlueBorderButton>
        </AddressContainer>
        <SubTitle>
          비밀번호
        </SubTitle>
        <Input placeholder="특수문자 포함 10자 이상" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <SubTitle>
          비밀번호 확인
        </SubTitle>
        <Input placeholder="다시 한번 입력해주세요" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <SignButton>회원가입 완료</SignButton>
        </>}
      </SignUpSubContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
