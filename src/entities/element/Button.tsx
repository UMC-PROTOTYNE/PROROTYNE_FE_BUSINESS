import styled from "@emotion/styled";
import { colors } from "@/shared/configs/colors";
import { PropsWithChildren } from "react";

interface ButtonProps {
  variant?: "default" | "outlined";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant,
  disabled,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonWrapper
      {...{ variant, disabled, onClick, type: onClick ? "button" : "submit" }} // onClick 이벤트가 있으면 button, 없으면 submit
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ variant: string | undefined }>`
  background-color: ${(props) =>
    props.variant === "outlined" ? "transparent" : colors.main};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.variant === "outlined" ? colors.main : colors.white};
  border: 1px solid
    ${(props) => (props.variant === "outlined" ? colors.main : null)};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) =>
      props.variant === "outlined" ? "#0500FF1A" : "#0400ffB3"};
  }
  &:disabled {
    background-color: ${(props) =>
      props.variant === "outlined" ? "transparent" : colors.gray[2]};
    opacity: ${(props) => (props.variant === "outlined" ? 0.1 : null)};
    cursor: not-allowed;
  }
`;
