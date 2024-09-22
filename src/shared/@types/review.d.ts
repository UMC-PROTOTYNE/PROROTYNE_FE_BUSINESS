declare namespace Review {
  //DTO
  export interface Reviews {
    result: {
      objectives: {
        question: string;
        answers: number[];
      }[];
      subjective: {
        question: string;
        answers: { userId: string; answer: string }[];
      };
      repurchase: number[];
      images: { userId: string; imageUrls: string[] }[];
    };
  }
}
