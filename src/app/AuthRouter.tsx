import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PAGE_URL, getAccess, setAccess } from "@/shared";

const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const access = getAccess();
    if (!access) navigate(PAGE_URL.SignIn);
    else {
      setAccess(access);
      //TODO: 정보 조회 API 붙이기
    }
  }, []);

  return <>{children}</>;
};

export default AuthRouter;
