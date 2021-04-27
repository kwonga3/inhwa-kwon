import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

// tslint:disable-next-line
export const GlobalStyle = createGlobalStyle`
${reset};
  * {
      box-sizing: border-box;
  }
  body{
    color: #293347;
    /* font-family: 'Do Hyeon', sans-serif; */
    /* font-family: 'Nanum Myeongjo', serif; */
    font-family: 'Noto Sans KR', sans-serif;
    /* font-family: 'Nanum Gothic', sans-serif; */
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
  }
  a{ 
      color:inherit;
      text-decoration:none;
  }
  button{
    cursor: pointer;
  }
  .container {
    margin: 0 auto;
    position: relative;
  }
`;
