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

  export interface BasicInfo {
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
    status: "대기";
  }

  export interface SignInResDto {
    result: {
      id: string;
      name: string;
      access_token: string;
    };
  }

  //Store
  export interface SignUpStore extends BasicInfo {
    setUserAllInfo: (value: BasicInfo) => void;
    getUserAllInfo: () => BasicInfo;
    setUsername: (value: string) => void;
    setPassword: (value: string) => void;
    setName: (value: string) => void;
    setRegNumber: (value: string) => void;
    setPhone: (value: string) => void;
    setEmail: (value: string) => void;
    setAddress: (value: string) => void;
    setCategory: (value: string) => void;
    setSize: (value: string) => void;
    setState: (value: string) => void;
  }

  export interface CompanyStore {
    id: string;
    name: string;
    setCompany: (data: SignInResDto["result"]) => void;
  }
}
