import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.footerBg};
  padding: 20px 0;
  position: relative;
`

const SocialItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialList = styled.ul`
  display: flex;
  gap: 40px;
  margin: 10px 0;
  flex-wrap: wrap;
`
const SocialIconLink = styled.a`
  display: flex;
  color: ${theme.colors.fontSecondary};
  justify-content: center;
  align-items: center;
  
  &:hover{
    transform: translateY(-4px);
  }

`

const Text = styled.span`
  color: ${theme.colors.fontSecondary};
`

const Name = styled.span`
  ${font({
    weight: 400,
    Fmax: 20,
    Fmin: 18
  })}
  color: ${theme.colors.fontSecondary};
`
const Copyright = styled.small`
  font-size: 12px;
  text-align: center;
  color: ${theme.colors.fontSecondary};
  opacity: 0.5;
`
export const S = {
    Footer,
    SocialItem,
    SocialIconLink,
    Text,
    Name,
    Copyright,
    SocialList
}