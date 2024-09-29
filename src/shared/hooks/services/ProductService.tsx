import { API, FORMAPI, useProductStore } from "@/shared";
import { AxiosResponse } from "axios";

export const ProductService = () => {
  const URI = "/products";

  const store = useProductStore();

  const createProduct = async () => {
    const body = {
      productInfo: {
        productName: store.productName,
        contents: store.contents,
        reqTickets: store.reqTickets,
        notes: store.notes,
        category: store.category,
      },
      questions: {
        question1: store.question1,
        question2: store.question2,
        question3: store.question3,
        question4: store.question4,
        question5: store.question5,
      },
    };
    await FORMAPI.post(URI, body);
    store.reset();
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
      // `/products/${productId}/event`
      `/products/4/event`, // 14 is a dummy value (홈 화면 구현 필요)
      { data }
    )) as AxiosResponse<Product.createInvestmentReqDto>;
    return result;
  };

  return { createProduct, createInvestment };
};
