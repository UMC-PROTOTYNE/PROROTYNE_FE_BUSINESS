import styled from "@emotion/styled";
import { BlueBorderButton } from "@/entities";
import { Prototype } from "@/widget";
import { useState } from "react";

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
    color: ${(props) => (props.isActive ? 'blue' : 'black')};
`;
const HomePage = () => {
    const [isPrototype, setIsPrototype] = useState(true);
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
                {isPrototype ? 
                <BlueBorderButton>
                    시제품 추가하기 +
                </BlueBorderButton> :
                <>
                </>
                }
                {isPrototype ? <Prototype isPrototype={isPrototype} image="./temp.svg" name="마라탕후루" ticket={3} regist="2024.02.02" category="식품" ongoing={3} releaseDate="2024.01.01"/> :
                    <Prototype isPrototype={isPrototype} image="./temp.svg" name="마라탕루" step="신청자 모집 기간" regist="2024.02.02" category="식품" terminateDate="2024.05.04"/>}
            </HomePageSubContainer>
        </HomePageContainer>
    );
}

export default HomePage;
