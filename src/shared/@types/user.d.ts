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
  //Store
  export interface CompanyStore {
    id: string;
    name: string;
    setCompany: (data: SignInResDto["result"]) => void;
  }
}
