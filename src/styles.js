import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const ThemeButton = styled.button`
  background-color: red;
`;

export const DataItemWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.mainColor};
  text-align: center;
`;

export const DataListWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.mainColor};
  text-align: center;
`;

export const DataDetailWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.mainColor};
  text-align: center;
`;

export const HomeWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.mainColor};
  text-align: center;
`;

export const NavBarStyled = styled.nav`
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.mainColor};
`;

export const SearchBarStyled = styled.input`
  text-align: center;
`;

export const Logo = styled(Link)`
  padding: 0.75em;
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  &.active {
    color: red;
  }
`;
