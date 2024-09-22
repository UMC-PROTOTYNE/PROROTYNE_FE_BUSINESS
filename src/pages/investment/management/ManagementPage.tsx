import { Applicant, StatusInfo, Survey } from "@/entities";
import { colors } from "@/shared";
import styled from "@emotion/styled";
import {
  Route,
  Routes,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";

const ManagementPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // 체험 현황 및 관리 페이지 진입 시 신청자 목록으로 이동
    if (currentPath === "/investment/" + params.investmentId + "/management") {
      navigate("applicant", { replace: true });
    }
  }, [currentPath, navigate]);

  return (
    <Wrapper>
      <Title>체험 현황 및 관리</Title>
      <StatusInfo />
      <RouteWrapper>
        <RouteHeader>
          <NavStyle
            to={"/investment/" + params.investmentId + "/management/applicant"}
          >
            신청자 목록
          </NavStyle>
          <NavStyle
            to={"/investment/" + params.investmentId + "/management/survey"}
          >
            설문조사
          </NavStyle>
          <div>체험 대상자들과 후기를 확인하고 체험 단계를 조절하세요!</div>
        </RouteHeader>
        <div style={{ height: "50px" }}></div>
        <Routes>
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </RouteWrapper>
    </Wrapper>
  );
};

export default ManagementPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RouteWrapper = styled.div`
  width: 100%;
  border: 1px solid ${colors.gray[1]};

  height: 55vh;

  overflow-y: auto;
`;

const RouteHeader = styled.div`
  display: flex;
  width: 100%;

  position: fixed;
  z-index: 10;

  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.main};
  }
`;

const NavStyle = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  font-weight: bold;
  color: ${colors.white};
  text-decoration: none;
  background-color: ${colors.gray[1]};
  &.active {
    background-color: ${colors.main};
  }
`;
