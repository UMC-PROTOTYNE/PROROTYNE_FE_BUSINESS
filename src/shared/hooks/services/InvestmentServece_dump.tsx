import { API } from "@/shared";
import { AxiosResponse } from "axios";

export const InvensmentServiceDump = () => {
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
      // `/products/${productId}/event`
      `/products/4/event`, // 14 is a dummy value (홈 화면 구현 필요)
      data
    )) as AxiosResponse<Product.createInvestmentReqDto>;
    return result;
  };

  return { createInvestment };
};
