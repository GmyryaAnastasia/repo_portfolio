import styled from "styled-components";
import {S} from "../contact/Contacts_Styles";
import {theme} from "../../../styles/Theme";

const StyledModal = styled.div`
  padding: 20px;


  ${S.Form} {
    margin-top: 10px;
  }

`

const TextWrapper = styled.div`
  padding: 20px;

  &p {
    align-items: center;
    font-size: 20px;
    font-weight: 500;
  }

`

const ButtonClose = styled.button`
  font-size: 25px;
  margin: 20px 30px 20px 20px;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  opacity: 0.5;

  &:hover {
    color: ${theme.colors.accent};
  }

`


export const C = {
    StyledModal,
    TextWrapper,
    ButtonClose
}