import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

import { RowLine } from "@/entities";

import { PAGE_URL } from "@/shared";

const productNavigate = [
  { label: "제품 정보", path: PAGE_URL.ProductInfo },
  { label: "설문 조사", path: PAGE_URL.ProductReview },
];

const investmentNavigate = [
  { label: "체험 정보", path: PAGE_URL.InvestmentInfo },
  { label: "체험 현황 및 관리", path: PAGE_URL.InvestmentManagement },
];

export const NavigationBar = ({
  state,
}: {
  state: "PRODUCT" | "INVESTMENT";
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Background>
        <Header>{state === "PRODUCT" ? "시제품 관리" : "체험 관리"}</Header>
        <RowLine />
        {state === "PRODUCT"
          ? productNavigate.map((element) =>
              "/" + element.path === location.pathname ? (
                <SelectLabel
                  onClick={() => {
                    navigate(element.path);
                  }}
                  key={element.label}
                >
                  {element.label}
                </SelectLabel>
              ) : (
                <Label
                  onClick={() => {
                    navigate(element.path);
                  }}
                  key={element.label}
                >
                  {element.label}
                </Label>
              )
            )
          : investmentNavigate.map((element) =>
              "/" + element.path === location.pathname ? (
                <SelectLabel
                  onClick={() => {
                    navigate(element.path);
                  }}
                  key={element.label}
                >
                  {element.label}
                </SelectLabel>
              ) : (
                <Label
                  onClick={() => {
                    navigate(element.path);
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

  background-color: #f2f3f4;

  display: flex;
  flex-direction: column;

  padding-left: 20px;
  padding-top: 80px;

  gap: 10px;
`;

const Container = styled.main`
  position: fixed;

  height: 100vh;
  width: calc(100vw - 200px);

  left: 200px;
  top: 0;

  overflow-y: auto;
`;

const Header = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const Label = styled.span`
  font-size: 14px;
`;

const SelectLabel = styled(Label)`
  color: #0500ff;
  font-weight: bold;
`;
