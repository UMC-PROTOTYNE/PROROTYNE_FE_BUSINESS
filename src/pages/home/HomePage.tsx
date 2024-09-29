import styled from "@emotion/styled";
import { BlueBorderButton } from "@/entities";
import { Prototype } from "@/widget";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PAGE_URL } from "@/shared";
import { HomeService } from "@/shared";

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const HomePageSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100vh;
`;
const SelectContainer = styled.div`
  display: flex;
  margin: 0px 0px 20px 0px;
`;
const Select = styled.div<{ isActive: boolean }>`
  margin: 0px 10px;
  padding: 0px 5px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "blue" : "black")};
`;
interface Product {
  productId: number;
  thumbnailUrl: string;
  productName: string;
  reqTickets: number;
  createdDate: string;
  category: string;
  eventCount: number;
}
interface Event {
  eventId: number;
  thumbnailUrl: string;
  productName: string;
  stageAndDate: string;
  createdDate: string;
  category: string;
}
const HomePage = () => {
  const [isPrototype, setIsPrototype] = useState(true);
  const navigate = useNavigate();
  const [product, setProduct] = useState<[Product]>([
    {
      productId: 1,
      thumbnailUrl: "",
      productName: "",
      reqTickets: 0,
      createdDate: "",
      category: "",
      eventCount: 0,
    },
  ]);
  const [event, setEvent] = useState<[Event]>([
    {
      eventId: 1,
      thumbnailUrl: "",
      productName: "",
      stageAndDate: "",
      createdDate: "",
      category: "",
    },
  ]);
  const homeService = HomeService();

  const fetchProducts = async () => {
    const productArray = await homeService.products();
    return productArray;
  };

  useEffect(() => {
    fetchProducts().then((product) => setProduct(product));
  }, []);

  const fetchEvents = async () => {
    const eventArray = await homeService.events();
    return eventArray;
  };
  useEffect(() => {
    fetchEvents().then((event) => setEvent(event));
  }, []);

  return (
    <HomePageContainer>
      <HomePageSubContainer>
        <h2>시제품 체험 목록</h2>
        <SelectContainer>
          <Select onClick={() => setIsPrototype(true)} isActive={isPrototype}>
            • 시제품 목록
          </Select>
          <Select onClick={() => setIsPrototype(false)} isActive={!isPrototype}>
            • 체험 목록
          </Select>
        </SelectContainer>
        {isPrototype ? (
          <BlueBorderButton
            onClick={() => {
              navigate(PAGE_URL.ProductInfo);
            }}
          >
            시제품 추가하기 +
          </BlueBorderButton>
        ) : (
          <></>
        )}

        {product.map((product, index) =>
          isPrototype ? (
            <Prototype
              key={index}
              isPrototype={isPrototype}
              image={product.thumbnailUrl}
              name={product.productName}
              ticket={product.reqTickets}
              regist={product.createdDate}
              category={product.category}
              ongoing={product.eventCount}
              releaseDate={product.createdDate}
              productId={product.productId}
            />
          ) : (
            <></>
          )
        )}
        {event.map((event, index) =>
          !isPrototype ? (
            <Prototype
              key={index}
              isPrototype={isPrototype}
              image={event.thumbnailUrl}
              name={event.productName}
              step={event.stageAndDate}
              regist={event.createdDate}
              category={event.category}
              terminateDate={event.createdDate}
              productId={event.eventId}
            />
          ) : (
            <></>
          )
        )}
      </HomePageSubContainer>
    </HomePageContainer>
  );
};

export default HomePage;
