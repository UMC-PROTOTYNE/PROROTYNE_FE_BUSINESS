import { AxiosResponse } from "axios";

import {
  API,
  setAccess,
  storeAccess,
  useSignUpStore,
  useCompanyStore,
} from "@/shared";

export const AuthService = () => {
  const userStore = useSignUpStore((state) => state);
  const setCompany = useCompanyStore((state) => state.setCompany);

  const signup = async () => {
    const reqData: { [key: string]: string } = {
      username: userStore.username,
      password: userStore.password,
      name: userStore.name,
      regNumber: userStore.regNumber,
      phone: userStore.phone,
      email: userStore.email,
      address: userStore.address,
      category: userStore.category,
      size: userStore.size,
      status: "대기",
    };

    await API.post("/signup", reqData);
  };

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

  return { signIn, signup };
};
