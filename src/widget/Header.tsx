import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { PAGE_URL, useCompanyStore } from "@/shared";

const Labels = [
  { label: "체험 관리", path: "/investment" },
  { label: "시제품 추가", path: "/product" },
  { label: "체험 생성", path: PAGE_URL.InvestmentSchedule },
  { label: "시제품/체험 관리 목록", path: PAGE_URL.Home },
  { label: "회사 정보 관리", path: PAGE_URL.MyCompany },
];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const name = useCompanyStore((state) => state.name);

  const label =
    Labels.find((element) => location.pathname.includes(element.path))?.label ??
    "404";

  return (
    <>
      <Background>
        <SubContainer>
          <Logo
            onClick={() => {
              navigate(PAGE_URL.Home);
            }}
            src="/logo/defualt.png"
            alt="logo"
          />
          <h2>{label}</h2>
        </SubContainer>
        <SubContainer>
          <h2>{name}</h2>
          <ArrowForwardIosIcon
            onClick={() => {
              navigate(PAGE_URL.MyCompany);
            }}
          />
          <SignOutButton>로그아웃</SignOutButton>
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

  > svg {
    margin-top: 2px;

    margin-left: -25px;
  }
`;

const SignOutButton = styled.button`
  height: 36px;
  width: 104px;

  background-color: #958883;

  border-radius: 2px;

  font-weight: bold;
  color: white;
  font-size: 20px;

  text-align: center;
`;
