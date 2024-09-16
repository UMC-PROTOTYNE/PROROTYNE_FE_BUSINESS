import styled from "@emotion/styled";

export const Button = styled.button`
  position: fixed;

  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 345px;
  height: 48px;

  background-color: #6482eb;

  font-size: 17px;
  color: white;

  border-radius: 8px;
  border-color: #6482eb;
`;

export const BlueBorderButton = styled.button<{ width?: string }>`
  border: 1px solid #0500FF;
  border-radius: 8px;
  width: ${(props) => props.width || "100%"};
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  color: #0500FF;
  cursor: pointer;
`;