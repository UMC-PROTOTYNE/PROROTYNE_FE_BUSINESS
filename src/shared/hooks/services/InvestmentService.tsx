import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const InvestmentService = () => {
  const UserList = async (investmentId: string | undefined) => {
    const {
      data: { result },
    } = (await API.get(
      `/user/list/14`
    )) as AxiosResponse<Investment.UserListReqDto>;
    return result;
  };

  const InvestmentInfo = async (investmentId: string | undefined) => {
    const {
      data: { result },
    } = (await API.get(
      `/events/14`
    )) as AxiosResponse<Investment.InvestmentInfoReqDto>;
    return result;
  };

  return { UserList, InvestmentInfo };
};
