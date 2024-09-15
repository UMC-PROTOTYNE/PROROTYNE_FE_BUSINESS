import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Background>
        <SubContainer>
          <Logo src="/logo/defualt.png" alt="logo" />
          <h2>하이</h2>
        </SubContainer>
      </Background>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Background = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 48px;

  background-color: #f6f5ff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 99;
`;

const Logo = styled.img`
  width: 160px;

  height: 100%;
  object-fit: contain;

  margin-top: 5px;
`;

const Container = styled.main`
  position: fixed;

  height: calc(100vh - 200px);
  width: 100vw;

  left: 0;
  top: 48px;

  overflow-y: auto;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 30px;
  align-items: center;

  margin: 0 20px 0 20px;
`;
