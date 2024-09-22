declare namespace Investment {
  //DTO
  export interface UserListReqDto {
    result: UserInfo[];
  }

  export interface UserInfo {
    userName: string;
    event_start: string;
    prizeStatus: string;
    deliveryStatus: string;
    reviewStatus: string;
    addInfo: string;
  }
}
