declare namespace Investment {
  //DTO
  export interface UserListReqDto {
    result: UserInfo[];
  }

  export interface InvestmentInfoReqDto {
    result: {
      productId: number;
      eventId: number;
      productImages: string[];
      productInfo: {
        productName: string;
        contents: string;
        reqTickets: number;
        notes: string;
        category: string;
      };
      dates: {
        eventStart: string;
        eventEnd: string;
        releaseStart: string;
        releaseEnd: string;
        feedbackStart: string;
        feedbackEnd: string;
      };
    };
  }
  export interface UserInfo {
    userId: number;
    userName: string;
    event_start: string;
    prizeStatus: string;
    deliveryStatus: string;
    reviewStatus: string;
    birth: string;
    familyMember: string;
    gender: string;
  }

  export interface UserPrizeReqDto {
    result: UserInfo[];
  }
  export interface UserDeliveryReqDto {
    result: UserInfo[];
  }

  export interface InvestmentProgressReqDto {
    result: {
      stage: number;
      investCount: number;
      feedbackCount: number;
    };
  }
}
