declare namespace Company {
  //DTO
  export interface SignInReqDto {
    username: string;
    password: string;
  }

  export interface SignInResDto {
    result: {
      id: number;
      name: string;
      access_token: string;
      refresh_token: string;
    };
  }

  export interface SignUpReqDto {
    username: string;
    password: string;
    name: string;
    regNumber: string;
    phone: string;
    email: string;
    address: string;
    category: string;
    size: string;
    status: string;
  }

  export interface SignUpResDto {
    result: {
      enterpriseId: number;
      msg: string;
    };
  }

  export interface ProductsResDto {
    result: [{
        productId: number;
        thumbnailUrl: string;
        productName: string;
        reqTickets: number;
        createdDate: string;
        category: string;
        eventCount: number;
    }];
  }

  export interface EventsResDto {
    result: [{
        eventId: number;
        thumbnailUrl: string;
        productName: string;
        stageAndDate: string;
        createdDate: string;
        category: string;
    }];
  }
  //Store
  export interface CompanyStore {
    id: number;
    name: string;
    setCompany: (data: SignInResDto["result"]) => void;
  }
}
