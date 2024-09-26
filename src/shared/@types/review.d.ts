declare namespace Review {
  //DTO
  export interface GetReviewsResDto {
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
      images: { userId: string; imageFiles: string[] }[];
    };
  }

  //인증 이미지 추가 필수
  export interface GetReviewResDto {
    result: {
      investmentId: string;
      userId: string;

      penalty: boolean;

      answer1: string;
      answer2: string;
      answer3: string;
      answer4: string;
      answer5: string;
      answer6: boolean;

      imageFiles: string[];
    };
  }
}
