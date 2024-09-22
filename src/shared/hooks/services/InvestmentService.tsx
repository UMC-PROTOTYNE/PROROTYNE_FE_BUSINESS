import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const InvestmentService = () => {
  const signIn = async (investmentId: number) => {
    const {
      data: { result },
    } = (await API.get(
      `/enterprise/user/list/${investmentId}`
    )) as AxiosResponse<Investment.UserListReqDto>;
    return result;
  };

  return { signIn };
};
