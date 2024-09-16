import styled from "@emotion/styled";

const LogoContainer = styled.div`
    margin: 20px 0px;
`;
export const Logo = () => {
    return (
        <LogoContainer>
            <div>앞서가는 당신을 위한 특별한 기회</div>
            <img src="./public/logo/defualt.png" alt="logo" />
        </LogoContainer>
    );
};

export default Logo;
