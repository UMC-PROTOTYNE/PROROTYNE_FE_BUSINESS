import styled from "@emotion/styled";
import { useNavigate } from "react-router";

import { Logo } from "@/widget";
import { SignButton } from "@/entities";
import { AuthService } from "@/shared";

const SignInPage = () => {
  const navigate = useNavigate();
  const { signIn } = AuthService();

  return (
    <SignInContainer>
      <SignInSubContainer>
        <Logo />
        <Form>
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" />
          <SignButton
            onClick={() => {
              signIn("string", "string").then(() => navigate("/home"));
            }}
          >
            로그인
          </SignButton>
        </Form>
        <SignupContainer>
          <Register>기업 등록</Register>|
          <SignIn onClick={() => navigate("/signup")}>회원 가입</SignIn>
        </SignupContainer>
      </SignInSubContainer>
    </SignInContainer>
  );
};

export default SignInPage;

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const SignInSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 10px 0px;
  padding: 8px 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  width: 400px;
  font-size: 16px;
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: 14px;
  color: gray;
`;
const Register = styled.div`
  cursor: pointer;
`;
const SignIn = styled.div`
  cursor: pointer;
`;
