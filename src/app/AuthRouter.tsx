import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PAGE_URL, getAccess } from "@/shared";

const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    //if (!getAccess()) navigate(PAGE_URL.SignIn);
  }, []);

  return <>{children}</>;
};

export default AuthRouter;
