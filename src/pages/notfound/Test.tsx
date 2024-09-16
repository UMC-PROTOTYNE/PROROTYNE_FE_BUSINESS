import { Button } from "@/entities";
import styled from "@emotion/styled";

const Test = () => {
  return (
    <>
      <Buttons>
        <Button
          onClick={() => {
            console.log("Default");
          }}
        >
          Default
        </Button>
        <Button
          onClick={() => {
            console.log("Default-disabled");
          }}
          disabled
        >
          Default-disabled
        </Button>
        <Button
          onClick={() => {
            console.log("Outlined");
          }}
          variant="outlined"
        >
          Outlined
        </Button>
        <Button
          onClick={() => {
            console.log("Outlined-disabled");
          }}
          variant="outlined"
          disabled
        >
          Outlined-disabled
        </Button>
      </Buttons>
    </>
  );
};

export default Test;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
