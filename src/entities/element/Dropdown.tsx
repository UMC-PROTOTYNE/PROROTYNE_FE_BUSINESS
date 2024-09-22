import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "@/shared/configs/colors";

interface DropdownProps {
  items: { item: string; value: string }[];
  setItem: (item: string) => void;
  value: string; // defaultItem 추가
}
export const Dropdown = ({ items, setItem, value }: DropdownProps) => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  return (
    <DropdownWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <DropdownButton onClick={handleClickContainer} {...{ isDropdownView }}>
        {value}
        <img src="/icons/dropdownArr.svg" />
      </DropdownButton>
      {isDropdownView && (
        <DropdownContents>
          {items.map((li, i) => (
            <>
              <div
                onClick={() => {
                  setItem(li.value);
                  setDropdownView(false);
                }}
                key={i}
              >
                <Content selected={value === li.item}>{li.item}</Content>
              </div>
              {i !== items.length - 1 && <hr />}
            </>
          ))}
        </DropdownContents>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
  min-height: 24px;
  width: 100%;
`;

const DropdownButton = styled.button<{ isDropdownView: boolean }>`
  display: flex;
  min-height: 24px;
  width: 100%;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.back};
  color: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 5px;
  font-size: 11px;
  cursor: pointer;
  & img {
    transform: ${(props) =>
      props.isDropdownView ? "rotate(180deg)" : "rotate(0deg)"};
  }
  &:hover {
    background-color: ${colors.gray[5]};
  }
`;

const DropdownContents = styled.div`
  z-index: 50;
  position: absolute;
  display: flex;
  width: 100%;
  padding: 5px 10px;
  top: 120%;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${colors.gray[3]};
  align-items: center;
  font-size: 11px;
  cursor: pointer;
  background-color: ${colors.back};
  border-radius: 4px;
  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 0;
  }
  & hr {
    width: 100%;
    margin: 0;
    border: 0.5px solid ${colors.gray[3]};
  }
`;

const Content = styled.div<{ selected: boolean }>`
  width: 100%;
  padding: 3px;
  border-radius: 5px;
  text-align: center;
  color: ${(props) => (props.selected ? colors.black : colors.gray[1])};
  &:hover {
    background-color: ${colors.gray[5]};
  }
`;
