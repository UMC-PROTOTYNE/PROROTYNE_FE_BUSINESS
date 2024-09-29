import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Logo } from "@/widget";
import { SignButton } from "@/entities";
import { AuthService } from "@/shared";
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  username: string
  password: string
}

const SignInPage = () => {
  const navigate = useNavigate();
  const { signin } = AuthService();
  const { register, handleSubmit, setError, formState: { errors }, } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      onValid(data)
      signin({
        username: data.username,
        password: data.password,
      }).then(() => navigate("/home"));
    }
    catch (error) {
      console.error(error)
    }
  }

  const onValid = (data : IFormInput) => {
    if (data.username === '') {      
        setError(
          'username',
          { message: '아이디가 입력되어 있지 않습니다.' },
          { shouldFocus: true },
        );
      }
      if (data.password === '') {
        setError(
          'password',
          { message: '비밀번호가 입력되어 있지 않습니다.' },
          { shouldFocus: true },
        );
      }
    }

  return (
    <SignInContainer>
      <SignInSubContainer>
        <Logo />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="아이디"
            {...register("username", { required: '아이디를 입력해주세요.', maxLength: 30, minLength: {
              value: 0,
              message: '아이디를 입력해주세요.',
            }, })}
          />
          {errors?.username?.message ? <ValidAlert>{errors?.username?.message}</ValidAlert> : <Null></Null>}
          <Input
            placeholder="비밀번호"
            type="password"
            {...register("password", { required: '비밀번호를 입력해주세요.', maxLength: 30, minLength: {
              value: 0,
              message: '비밀번호를 입력해주세요.',
            }, })}
          />
          {errors?.password?.message ? <ValidAlert>{errors?.password?.message}</ValidAlert> : <Null></Null>}
          <SignButton
            type="submit"
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
  height: 98vh;
`;
const SignInSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
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

const ValidAlert = styled.div`
  color: red;
  font-size: 12px;
`;
const Null = styled.div`
  margin: 6.8px 0px;
`;