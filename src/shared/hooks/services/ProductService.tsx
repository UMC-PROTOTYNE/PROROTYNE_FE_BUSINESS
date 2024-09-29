import { FORMAPI, useProductStore } from "@/shared";

export const ProductService = () => {
  const URI = "/products";

  const store = useProductStore();

  const createProduct = async () => {
    const data = new FormData();

    const body = {
      productInfo: {
        productName: store.productName,
        contents: store.contents,
        reqTickets: store.reqTickets,
        notes: store.notes,
        category: store.category,
        launchedDate: store.launchedDate,
      },
      questions: {
        question1: store.question1,
        question2: store.question2,
        question3: store.question3,
        question4: store.question4,
        question5: store.question5,
      },
    };

    data.append("productRequest", JSON.stringify(body));

    store.images.forEach((image) => {
      data.append("imageFiles", image);
    });

    await FORMAPI.post(URI, data);
    store.reset();
  };

  return { createProduct };
};
