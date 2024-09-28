import { Button, Dropdown, InputTitle } from "@/entities";
import { colors, InvestmentService } from "@/shared";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApplicantItem = ({
  userId,
  userName,
  event_start,
  prizeStatus,
  deliveryStatus,
  reviewStatus,
  gender,
  birth,
  familyMember,
}: Investment.UserInfo) => {
  const params = useParams();

  const [modal, onModal] = useState<boolean>(false);
  const [deliveryModal, onDeliveryModal] = useState<boolean>(false);
  const [deliveryStatusState, setDeliveryStatus] = useState<string>(
    deliveryStatus ? "배송 후" : "배송 전"
  );
  const [winnerState, setWinnerReview] = useState<string>(prizeStatus);

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
              InvestmentService().UserDelivery(params.investmentId, {
                userId,
                "택배사 이름": deliveryCompany,
                "운송장 번호": deliveryNumber,
              });
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
          <h1>{userName}의 상세 정보</h1>
          <ModalHeader>
            <div>
              <h3>상태</h3>
              <p>{deliveryStatus}</p>
            </div>
            <div>
              <h3>당첨자</h3>
              <p>{prizeStatus}</p>
            </div>
            <div>
              <h3>후기 작성</h3>
              <p>{reviewStatus}</p>
            </div>
          </ModalHeader>
          <ModalContent>
            <div>
              <h3>신청일</h3>
              <p>{event_start || "없음"}</p>
            </div>
            <div>
              <h3>성별</h3>
              <p>{gender}</p>
            </div>
            <div>
              <h3>생년월일</h3>
              <p>{birth || "없음"}</p>
            </div>
            <div>
              <h3>가족 구성원 수</h3>
              <p>{familyMember || "없음"}명</p>
            </div>
          </ModalContent>
        </Modal>
      </ModalBackground>
    );
  };
  return (
    <>
      <Item onClick={() => onModal(true)}>
        <div className="items">{userName}</div>
        <div className="items">{event_start}</div>
        <div className="items">
          <Dropdown
            items={[
              { item: "당첨", value: "당첨" },
              { item: "미당첨", value: "미당첨" },
            ]}
            setValue={(value) => {
              setWinnerReview(value);
              console.log({ value, userId });
              InvestmentService().UserPrize(params.investmentId, {
                userId,
                isPrize: value === "당첨",
              });
            }}
            selectedItem={winnerState}
          />
        </div>
        <div className="items">
          <Dropdown
            items={[
              { item: "배송 전", value: "배송 전" },
              { item: "배송 후", value: "배송 후" },
            ]}
            setValue={(value) => {
              value === "배송 후" && onDeliveryModal(true);
            }}
            selectedItem={deliveryStatusState}
          />
        </div>
        <div className="items">{reviewStatus}</div>
        <div style={{ whiteSpace: "break-spaces" }} className="items">
          {`성별: ${gender}\n생년월일: ${birth}\n가족 구성원 수: ${familyMember}`}
        </div>
      </Item>
      {modal && <ApplicationModal />}
      {deliveryModal && <DeliveryModal />}
    </>
  );
};

export const Applicant = () => {
  const [applicantData, setApplicantData] =
    useState<Investment.UserListReqDto>();
  const params = useParams();

  useEffect(() => {
    InvestmentService()
      .UserList(params.investmentId)
      .then((result) => {
        // console.log({ result });
        setApplicantData({ result });
      });
  }, []);

  return (
    <Container>
      <Header>
        {HeaderItem.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Header>
      {applicantData &&
        applicantData.result.map((data, index) => (
          <ApplicantItem key={data.userName + index} {...data} />
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
  .items {
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
  "아이디",
  "신청일",
  "당첨자",
  "배송 상태",
  "후기 작성",
  "추가 정보",
];
