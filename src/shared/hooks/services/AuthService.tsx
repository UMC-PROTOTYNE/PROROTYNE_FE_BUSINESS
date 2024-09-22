import { AxiosResponse } from "axios";

import { API, setAccess, storeAccess, useUserStore } from "@/shared";

export const AuthService = () => {
  const userStore = useUserStore((state) => state);



  const signup = async () => {
    const reqData: { [key: string]: string
        } = {
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


  return {
    signup,
  };
};