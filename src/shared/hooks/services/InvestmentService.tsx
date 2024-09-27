import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const InvestmentService = () => {
  const InvestmentInfo = async (investmentId: string | undefined) => {
    const {
      data: { result },
    } = (await API.get(
      // `/events/${investmentId}`
      `/events/14` // 14 is a dummy value (홈 화면 구현 필요)
    )) as AxiosResponse<Investment.InvestmentInfoReqDto>;
    return result;
  };

  const UserList = async (investmentId: string | undefined) => {
    const {
      data: { result },
    } = (await API.get(
      // `/user/list/${investmentId}`
      `/user/list/14` // 14 is a dummy value (홈 화면 구현 필요)
    )) as AxiosResponse<Investment.UserListReqDto>;
    return result;
  };

  const UserPrize = async (
    investmentId: string | undefined,
    params: { userId: string; isPrize: boolean }
  ) => {
    const {
      data: { result },
    } = (await API.patch(
      // `/user/prize/${investmentId}`
      `/user/prize/14`, // 14 is a dummy value (홈 화면 구현 필요)
      { params }
    )) as AxiosResponse<Investment.UserPrizeReqDto>;
    return result;
  };

  const UserDelivery = async (
    investmentId: string | undefined,
    params: { userId: string; "택배사 이름": string; "운송장 번호": string }
  ) => {
    const {
      data: { result },
    } = (await API.patch(
      // `/user/delivery/${investmentId}`
      `/user/delivery/14`, // 14 is a dummy value (홈 화면 구현 필요)
      { params }
    )) as AxiosResponse<Investment.UserDeliveryReqDto>;
    return result;
  };

  return { UserList, InvestmentInfo, UserPrize, UserDelivery };
};
