import styled from "@emotion/styled";
import { ValidAlert } from "@/entities";
import { useEffect } from "react";
const ComboBoxSubContainer = styled.div`
    margin-right: 20px;
    width: 100%;
`;
const Select = styled.select`
    width: 100%;
    background: #F6F5FF;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    padding-left: 10px;
`;
const SubTitle = styled.div`
  font-weight: bold;
  margin: 20px 0px 10px 0px;
`;
export const ComboBox = ({type, setValue, valid}: {type: string, setValue: any, valid: boolean}) => {

    return (
        <ComboBoxSubContainer>
            <SubTitle>
                { type === "businessType" ? "업종" : "기업 규모" }
            </SubTitle>
            <Select onChange={(e) => setValue(e.target.value)}>
                <option value="" disabled selected>
                    { type === "businessType" ? "업종을 선택해 주세요" : "기업 규모를 선택해 주세요" }
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
            </Select>
            <ValidAlert valid={valid}></ValidAlert>
        </ComboBoxSubContainer>
    );
};
export default ComboBox;