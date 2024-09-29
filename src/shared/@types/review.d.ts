declare namespace Review {
  //DTO
  export interface GetReviewsResDto {
    result: {
      objectives: {
        question: string;
        answers: number[];
      }[];
      subjectiveList: {
        question: string;
        answers: { userId: string; answer: string };
      }[];
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

      answer1: number;
      answer2: number;
      answer3: number;
      answer4: number;
      answer5: string;
      answer6: boolean;

      imagefiles: string[];
    };
  }
}
