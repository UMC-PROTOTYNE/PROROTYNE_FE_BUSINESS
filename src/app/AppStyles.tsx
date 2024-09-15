import { Global, css } from "@emotion/react";

const Styles = css`
  * {
    font-family: "Spoqa Han Sans Neo", "sans-seri";
  }
  body {
    overflow-x: hidden;
  }
  button {
    all: unset;
  }
`;

const AppStyles = () => <Global styles={Styles}></Global>;

export default AppStyles;
