import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ValidAlert = styled.div<{ valid: boolean }>`
  display: ${(props) => (props.valid ? "none" : "block")};
  color: red;
  font-size: 12px;
`;