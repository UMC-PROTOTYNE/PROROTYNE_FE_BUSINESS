import { AxiosResponse } from "axios";

import { API, setAccess, storeAccess, useCompanyStore } from "@/shared";

export const AuthService = () => {
  const setCompany = useCompanyStore((state) => state.setCompany);

  const signIn = async (username: string, password: string) => {
    const {
      data: { result },
    } = (await API.post("/login", {
      username: username,
      password: password,
    })) as AxiosResponse<Company.SignInResDto>;

    setAccess(result.access_token);
    storeAccess(result.access_token);
    setCompany(result);
  };

  return { signIn };
};
