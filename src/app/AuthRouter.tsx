import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PAGE_URL, getAccess, setAccess } from "@/shared";

const queryClient = new QueryClient();

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

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AuthRouter;
