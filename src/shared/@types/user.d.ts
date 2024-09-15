declare namespace User {
  //DTO
  export interface SignInReqDto {
    signId: string;
    password: string;
  }

  //Store
  export interface UserStore {
    isSignIn: boolean;
  }
}
