import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
  position: relative;
`
const Form = styled.form`
  max-width: 524px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 176px;
  }
`
const Field = styled.input`
  font-family: 'Nunito Sans',sans-serif;
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  padding: 14px;
  font-size: 16px;
  color: ${theme.colors.font};

  &::placeholder {
    color: #071A58
  }
`
const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 20px;
 
  @media screen and (max-width: 969px) {
    width: 100%;
  }

`
const MapWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const Link = styled.iframe`
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid black;

  @media screen and (max-width: 969px) {
    margin-top: 40px;
    
  }

`

export const S = {
    Contacts,
    Form,
    Field,
    ContactsWrapper,
    MapWrapper,
    Link
}