import { FORMAPI, useProductStore } from "@/shared";

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

  return { createProduct };
};
