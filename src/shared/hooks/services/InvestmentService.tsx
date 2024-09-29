import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const InvestmentService = () => {
  const InvestmentInfo = async (investmentId: string | undefined) => {
    const {
      data: { result },
    } = (await API.get(
      `/events/${investmentId}`
      // `/events/14` // 14 is a dummy value (홈 화면 구현 필요)
    )) as AxiosResponse<Investment.InvestmentInfoReqDto>;
    return result;
  };

  const InvestmentProgress = async (investmentId: string | undefined) => {
    const {
      data: { result },
    } = (await API.get(
      `/progress/${investmentId}`
      // `/progress/14` // 14 is a dummy value (홈 화면 구현 필요)
    )) as AxiosResponse<Investment.InvestmentProgressReqDto>;
    return result;
  };

  const UserList = async (investmentId: string | undefined) => {
    const {
      data: { result },
    } = (await API.get(
      `/user/list/${investmentId}`
      // `/user/list/14` // 14 is a dummy value (홈 화면 구현 필요)
    )) as AxiosResponse<Investment.UserListReqDto>;
    return result;
  };

  const UserPrize = async (
    investmentId: string | undefined,
    params: { userId: number; isPrize: boolean }
  ) => {
    const {
      data: { result },
    } = (await API.patch(
      `/user/prize/${investmentId}`,
      // `/user/prize/14`, // 14 is a dummy value (홈 화면 구현 필요)
      null,
      { params }
    )) as AxiosResponse<Investment.UserPrizeReqDto>;
    return result;
  };

  const UserDelivery = async (
    investmentId: string | undefined,
    params: { userId: number; deliveryCompany: string; transportNum: string }
  ) => {
    const {
      data: { result },
    } = (await API.patch(
      `/user/delivery/${investmentId}`,
      // `/user/delivery/14`, // 14 is a dummy value (홈 화면 구현 필요)
      null,
      { params }
    )) as AxiosResponse<Investment.UserDeliveryReqDto>;
    return result;
  };

  const createInvestment = async (
    productId: string | undefined,
    data: {
      eventStart: string;
      eventEnd: string;
      releaseStart: string;
      releaseEnd: string;
      feedbackStart: string;
      feedbackEnd: string;
    }
  ) => {
    const {
      data: { result },
    } = (await API.post(
      `/products/${productId}/event`,
      // `/products/4/event`, // 14 is a dummy value (홈 화면 구현 필요)
      data
    )) as AxiosResponse<Product.createInvestmentReqDto>;
    return result;
  };

  return {
    UserList,
    InvestmentInfo,
    InvestmentProgress,
    UserPrize,
    UserDelivery,
    createInvestment,
  };
};
