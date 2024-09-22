import styled from "@emotion/styled";
import {
  BlueBorderButton,
  SignButton,
  Input,
  ValidAlert,
  Dropdown,
} from "@/entities";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router";

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
  width: 100%;
  gap: 20px;
`;
const ComboBoxSubContainer = styled.div`
  margin-right: 20px;
  width: 152px;
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
  border: 1px solid #d9d9d9;
`;

const DropdownContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  height: 30px;
  margin: 10px 10px 10px 0px;
`;

const SignButtonContainer = styled.div`
  display: flex;
  margin: 0px 0px 0px 0px;
`;

const SignUpPage = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [address, setAddress] = useState(false);
  const [inputAddress, setInputAddress] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyNameValid, setCompanyNameValid] = useState(true);
  const [businessNumber, setBusinessNumber] = useState("");
  const [businessNumberValid, setBusinessNumberValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [detailedAddress, setDetailedAddress] = useState("");
  const [detailedAddressValid, setDetailedAddressValid] = useState(true);
  const [businessType, setBusinessType] = useState("");
  const [businessTypeValid, setBusinessTypeValid] = useState(true);
  const [businessSize, setBusinessSize] = useState("");
  const [businessSizeValid, setBusinessSizeValid] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const validation = () => {
    const isValid = {
      companyName: companyName !== "",
      businessNumber: businessNumber !== "",
      phoneNumber: phoneNumber !== "",
      email: email !== "",
      detailedAddress: inputAddress !== "" && detailedAddress !== "",
      businessType: businessType !== "",
      businessSize: businessSize !== "",
    };

    setCompanyNameValid(isValid.companyName);
    setBusinessNumberValid(isValid.businessNumber);
    setPhoneNumberValid(isValid.phoneNumber);
    setEmailValid(isValid.email);
    setDetailedAddressValid(isValid.detailedAddress);
    setBusinessTypeValid(isValid.businessType);
    setBusinessSizeValid(isValid.businessSize);

    return Object.values(isValid).every((v) => v === true);
  };
  const signupValid = () => {
    const isValid = {
      username: username !== "",
      password: password !== "",
      confirmPassword: confirmPassword !== "",
    };
    setUsernameValid(isValid.username);
    setPasswordValid(isValid.password);
    setConfirmPasswordValid(isValid.confirmPassword);

    return Object.values(isValid).every((v) => v === true);
  };
  const handleContinue = () => {
    if (validation()) {
      setProgress(progress + 1);
    }
  };
  const handleSuccess = () => {
    if (signupValid()) {
      alert("회원가입이 완료되었습니다");
      navigate("/signin");
    }
  };

  return (
    <SignUpContainer>
      <SignUpSubContainer>
        {address && (
          <AddressDetailBackground
            onClick={() => {
              setAddress(false);
            }}
          >
            <AddressDetailContainer>
              <DaumPostcode
                onComplete={(data) => {
                  setAddress(false);
                  setInputAddress(data.address);
                }}
              />
            </AddressDetailContainer>
          </AddressDetailBackground>
        )}
        <LogoContainer>
          <Logo src="./logo/defualt.png" alt="logo" />
        </LogoContainer>
        {progress === 0 ? (
          <Description>{`시제품 등록을 위해
기업 정보가 필요해요!`}</Description>
        ) : (
          <Description>{`아이디 비밀번호 생성`}</Description>
        )}
        {progress === 0 ? (
          <>
            <SubTitle>기업명</SubTitle>
            <Input
              placeholder="기업명을 작성해 주세요"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <ValidAlert valid={companyNameValid}>
              * 기업명을 작성해 주세요
            </ValidAlert>
            <SubTitle>사업자 등록번호(10자리)</SubTitle>
            <Input
              placeholder="사업자 등록번호를 입력해 주세요"
              value={businessNumber}
              onChange={(e) => setBusinessNumber(e.target.value)}
            />
            <ValidAlert valid={businessNumberValid}>
              * 사업자 등록번호를 입력해 주세요
            </ValidAlert>
            <SubTitle>전화번호</SubTitle>
            <Input
              placeholder="전화번호를 작성해주세요"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <ValidAlert valid={phoneNumberValid}>
              * 전화번호를 작성해주세요
            </ValidAlert>
            <SubTitle>이메일</SubTitle>
            <Input
              placeholder="이메일을 작성해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidAlert valid={emailValid}>* 이메일을 작성해주세요</ValidAlert>
            <SubTitle>주소</SubTitle>
            <AddressContainer>
              <Input
                placeholder="우편번호"
                value={inputAddress}
                onChange={(e) => setInputAddress(e.target.value)}
              />
              <BlueBorderButton
                width="150px"
                height="15px"
                onClick={() => setAddress(true)}
              >
                주소 찾기
              </BlueBorderButton>
            </AddressContainer>
            <Input
              placeholder="상세 주소"
              value={detailedAddress}
              onChange={(e) => setDetailedAddress(e.target.value)}
            />
            <ValidAlert valid={detailedAddressValid}>
              * 주소를 입력해 주세요
            </ValidAlert>
            <ComboBoxContainer>
              <ComboBoxSubContainer>
                <SubTitle>업종</SubTitle>
                <DropdownContainer>
                  <Dropdown
                    items={[
                      { item: "IT", value: "IT" },
                      { item: "제조", value: "제조" },
                      { item: "서비스", value: "서비스" },
                    ]}
                    setValue={(value) => setBusinessType(value)}
                  />
                </DropdownContainer>
                <br />
                <br />
                <br />
                <ValidAlert valid={businessTypeValid}>
                  * 업종을 선택해 주세요
                </ValidAlert>
              </ComboBoxSubContainer>
              <ComboBoxSubContainer>
                <SubTitle>기업 규모</SubTitle>
                <DropdownContainer>
                  <Dropdown
                    items={[
                      { item: "1~10명", value: "1~10명" },
                      { item: "11~50명", value: "11~50명" },
                      { item: "51~100명", value: "51~100명" },
                      { item: "100명 이상", value: "100명 이상" },
                    ]}
                    setValue={(value) => setBusinessSize(value)}
                  />
                </DropdownContainer>
                <br />
                <br />
                <br />
                <ValidAlert valid={businessSizeValid}>
                  * 기업 규모를 선택해 주세요
                </ValidAlert>
              </ComboBoxSubContainer>
            </ComboBoxContainer>
            <SignButtonContainer>
              <SignButton onClick={handleContinue}>계속하기</SignButton>
            </SignButtonContainer>
          </>
        ) : (
          <>
            <SubTitle>아이디</SubTitle>
            <AddressContainer>
              <Input
                placeholder="8자 이상, 대,소문자, 숫자"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <BlueBorderButton width="150px" height="15px">
                중복 확인
              </BlueBorderButton>
            </AddressContainer>
            <ValidAlert valid={usernameValid}>
              * 아이디을 작성해주세요
            </ValidAlert>
            <SubTitle>비밀번호</SubTitle>
            <Input
              placeholder="특수문자 포함 10자 이상"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ValidAlert valid={passwordValid}>
              * 비밀번호를 작성해주세요
            </ValidAlert>
            <SubTitle>비밀번호 확인</SubTitle>
            <Input
              placeholder="다시 한번 입력해주세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ValidAlert valid={confirmPasswordValid}>
              * 비밀번호를 확인해주세요
            </ValidAlert>
            <SignButton onClick={handleSuccess}>회원가입 완료</SignButton>
          </>
        )}
      </SignUpSubContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
