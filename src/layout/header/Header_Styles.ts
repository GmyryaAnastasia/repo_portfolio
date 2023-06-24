import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
  background-color: ${theme.colors.accent};
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  height: 50px;
`

export const S = {
    Header
}