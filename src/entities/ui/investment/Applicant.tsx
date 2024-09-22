import { Button, Dropdown, InputTitle } from "@/entities";
import { colors } from "@/shared";
import styled from "@emotion/styled";
import { useState } from "react";

interface ApplicantData {
  id: number;
  userId: string;
  applyDate: string;
  winner: boolean;
  deliveryStatus: "배송 전" | "배송 후";
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
  const [modal, onModal] = useState<boolean>(false);
  const [deliveryModal, onDeliveryModal] = useState<boolean>(false);
  const [deliveryStatusState, setDeliveryStatus] =
    useState<string>(deliveryStatus);
  const [winnerState, setWinnerReview] = useState<boolean>(winner);

  const DeliveryModal = () => {
    const [deliveryCompany, setDeliveryCompany] = useState<string>("");
    const [deliveryNumber, setDeliveryNumber] = useState<string>("");

    return (
      <ModalBackground onClick={() => onDeliveryModal(false)}>
        <Modal
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h1>배송 상태 변경</h1>
          <InputTitle
            title="택배사 입력"
            value={deliveryCompany}
            setValue={setDeliveryCompany}
          />
          <InputTitle
            title="송장번호 입력"
            value={deliveryNumber}
            setValue={setDeliveryNumber}
          />
          <Button
            onClick={() => {
              setDeliveryStatus("배송 후");
              onDeliveryModal(false);
            }}
          >
            배송지 입력 완료
          </Button>
        </Modal>
      </ModalBackground>
    );
  };

  const ApplicationModal = () => {
    return (
      <ModalBackground onClick={() => onModal(false)}>
        <Modal
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h1>
            {id}번 신청자 {userId}의 상세 정보
          </h1>
          <ModalHeader>
            <div>
              <h3>상태</h3>
              <p>배송 전</p>
            </div>
            <div>
              <h3>당첨자</h3>
              <p>당첨</p>
            </div>
            <div>
              <h3>후기 작성</h3>
              <p>미작성</p>
            </div>
          </ModalHeader>
          <ModalContent>
            <div>
              <h3>추가 정보</h3>
              <p>{additionalInfo}</p>
            </div>
          </ModalContent>
        </Modal>
      </ModalBackground>
    );
  };
  return (
    <>
      <Item onClick={() => onModal(true)}>
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
                setWinnerReview(value === "당첨" ? true : false);
              }}
              value={winnerState ? "당첨" : "미당첨"}
            />
          </div>
        </p>

        <p>
          <Dropdown
            items={[
              { item: "배송 전", value: "배송 전" },
              { item: "배송 후", value: "배송 후" },
            ]}
            setItem={(value) => {
              value === "배송 후" && onDeliveryModal(true);
            }}
            value={deliveryStatusState}
          />
        </p>
        <p>{review ? "작성" : "미작성"}</p>
        <p>{additionalInfo}</p>
      </Item>
      {modal && <ApplicationModal />}
      {deliveryModal && <DeliveryModal />}
    </>
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
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray[5]};
  }
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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  gap: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  background-color: ${colors.back};
  z-index: 101;
  border-radius: 16px;
  padding: 20px 80px;
  h1 {
    font-size: 17px;
    font-weight: bold;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 10px;
  div {
    text-align: center;
    h3,
    p {
      font-size: 16px;
    }
    button {
      background-color: ${colors.gray[6]};
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border-radius: 10px;
  div {
    padding: 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 16px;
    }
    p {
      color: ${colors.gray[1]};
      font-size: 14px;
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
    deliveryStatus: "배송 후",
    review: true,
    additionalInfo: "추가 정보",
  },
  {
    id: 2,
    userId: "test2",
    applyDate: "2021-10-11",
    winner: false,
    deliveryStatus: "배송 전",
    review: false,
    additionalInfo: "추가 정보",
  },
  {
    id: 3,
    userId: "test3",
    applyDate: "2021-10-12",
    winner: true,
    deliveryStatus: "배송 후",
    review: true,
    additionalInfo: "추가 정보",
  },
  {
    id: 4,
    userId: "test4",
    applyDate: "2021-10-13",
    winner: false,
    deliveryStatus: "배송 후",
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
