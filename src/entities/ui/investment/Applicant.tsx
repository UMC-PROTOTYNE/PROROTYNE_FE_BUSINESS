import { Dropdown } from "@/entities/element/Dropdown";
import { colors } from "@/shared";
import styled from "@emotion/styled";

interface ApplicantData {
  id: number;
  userId: string;
  applyDate: string;
  winner: boolean;
  deliveryStatus: string;
  review: boolean;
  additionalInfo: string;
}

const ApplicantItem = ({
  id,
  userId,
  applyDate,
  winner,
  deliveryStatus,
  review,
  additionalInfo,
}: ApplicantData) => {
  return (
    <Item>
      <p>{id}</p>
      <p>{userId}</p>
      <p>{applyDate}</p>
      <p>
        <div>
          <Dropdown
            items={[
              { item: "당첨", value: "당첨" },
              { item: "미당첨", value: "미당첨" },
            ]}
            setItem={(value) => {
              console.log(value);
            }}
            defaultItem={winner ? "당첨" : "미당첨"}
          />
        </div>
      </p>

      <p>
        <Dropdown
          items={[
            { item: "배송 전", value: "배송 전" },
            { item: "배송 중", value: "배송 중" },
            { item: "배송 완료", value: "배송 완료" },
          ]}
          setItem={(value) => {
            console.log(value);
          }}
          defaultItem={deliveryStatus}
        />
      </p>
      <p>{review ? "작성" : "미작성"}</p>
      <p>{additionalInfo}</p>
    </Item>
  );
};

export const Applicant = () => {
  return (
    <Container>
      <Header>
        {HeaderItem.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Header>
      {ApplicantData.map((data) => (
        <ApplicantItem key={data.id} {...data} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 2px;
  margin: 20px 0;
`;

const Header = styled.div`
  background-color: ${colors.gray[4]};
  display: flex;
  gap: 10px;
  font-weight: bold;
  p {
    flex: 1;
    text-align: center;
  }
`;

const Item = styled.div`
  background-color: ${colors.gray[6]};
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 100px;
    }
  }
`;

const HeaderItem = [
  "번호",
  "아이디",
  "신청일",
  "당첨자",
  "배송 상태",
  "후기 작성",
  "추가 정보",
];

const ApplicantData: ApplicantData[] = [
  {
    id: 1,
    userId: "test1",
    applyDate: "2021-10-10",
    winner: true,
    deliveryStatus: "배송 전",
    review: true,
    additionalInfo: "추가 정보",
  },
  {
    id: 2,
    userId: "test2",
    applyDate: "2021-10-11",
    winner: false,
    deliveryStatus: "배송 중",
    review: false,
    additionalInfo: "추가 정보",
  },
  {
    id: 3,
    userId: "test3",
    applyDate: "2021-10-12",
    winner: true,
    deliveryStatus: "배송 중",
    review: true,
    additionalInfo: "추가 정보",
  },
  {
    id: 4,
    userId: "test4",
    applyDate: "2021-10-13",
    winner: false,
    deliveryStatus: "배송 완료",
    review: false,
    additionalInfo: "추가 정보",
  },
  {
    id: 5,
    userId: "test5",
    applyDate: "2021-10-14",
    winner: true,
    deliveryStatus: "배송 전",
    review: true,
    additionalInfo: "추가 정보",
  },
];
