import { FORMAPI, getAccess, useProductStore } from "@/shared";

export const ProductService = () => {
  const URI = "/products";

  const store = useProductStore();

  const createProduct = async (question: any) => {
    const data = new FormData();

    const body = {
      productInfo: {
        productName: store.productName,
        contents: store.contents,
        reqTickets: Number(store.reqTickets),
        notes: store.notes,
        category: store.category,
        launchedDate: store.launchedDate || null,
      },
      questions: {
        question1: question.question1,
        question2: question.question2,
        question3: question.question3,
        question4: question.question4,
        question5: question.question5
      },
    };

    data.append("productRequest", JSON.stringify(body));


    store.images.forEach((image) => {
      data.append("imageFiles", image);
    });
    
    await FORMAPI.post(URI, data, {
      headers: {
        "Authorization": getAccess(),
        "Content-Type": "multipart/form-data",
      },
      
    });
    store.reset();
  };

  return { createProduct };
};
