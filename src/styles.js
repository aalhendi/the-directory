import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props)=> props.theme.backgroundColor}
}
`;

export const ThemeButton = styled.button`
  background-color: red;
`;

export const DataItemWrapper = styled.div`
    text-align: center;
`
