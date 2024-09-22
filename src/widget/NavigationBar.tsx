import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import styled from "@emotion/styled";

import { RowLine } from "@/entities";

const productNavigate = [
  { label: "제품 정보", path: "/info" },
  { label: "설문 조사", path: "/review" },
];

const investmentNavigate = [
  { label: "체험 정보", path: "/info" },
  { label: "체험 현황 및 관리", path: "/management" },
];

export const NavigationBar = ({
  state,
}: {
  state: "PRODUCT" | "INVESTMENT";
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const param = useParams();

  const id = state === "PRODUCT" ? "" : param.investmentId;

  return (
    <>
      <Background>
        <RowLine />
        {state === "PRODUCT"
          ? productNavigate.map((element) =>
              location.pathname.includes(element.path) ? (
                <SelectLabel
                  onClick={() => {
                    navigate("/product" + element.path);
                  }}
                  key={element.label}
                >
                  {element.label}
                </SelectLabel>
              ) : (
                <Label
                  onClick={() => {
                    navigate("/product" + element.path);
                  }}
                  key={element.label}
                >
                  {element.label}
                </Label>
              )
            )
          : investmentNavigate.map((element) =>
              location.pathname.includes(element.path) ? (
                <SelectLabel
                  onClick={() => {
                    navigate("/investment/" + id + element.path);
                  }}
                  key={element.label}
                >
                  {element.label}
                </SelectLabel>
              ) : (
                <Label
                  onClick={() => {
                    navigate("/investment/" + id + element.path);
                  }}
                  key={element.label}
                >
                  {element.label}
                </Label>
              )
            )}
      </Background>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Background = styled.div`
  position: fixed;

  height: 100vh;
  width: 180px;

  left: 0;
  top: 0;

  background-color: #f6f5ff;

  display: flex;
  flex-direction: column;

  padding-left: 20px;
  padding-top: 48px;

  gap: 10px;
`;

const Container = styled.main`
  position: fixed;

  height: 100%;
  width: calc(100vw - 200px);

  left: 200px;
  top: 48px;

  overflow-y: auto;
`;

const Label = styled.span`
  color: gray;
  font-size: 16px;
`;

const SelectLabel = styled(Label)`
  color: black;
  font-weight: bold;
`;
