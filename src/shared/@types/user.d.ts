declare namespace Company {
  //DTO
  export interface SignInReqDto {
    signId: string;
    password: string;
  }

  export interface SignInResDto {
    result: {
      id: string;
      name: string;
      access_token: string;
    };
  }

  //Store
  export interface CompanyStore {
    id: string;
    name: string;
    setCompany: (data: SignInResDto["result"]) => void;
  }
}
