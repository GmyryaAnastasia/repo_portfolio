import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
position: relative;
`
const Photo = styled.img`
  width: 432px;
  height: 541px;
  object-fit: cover;
  border-radius: 40.406px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  
  @media ${theme.media.ipad} {
    width: 270px;
    height: 350px;
  }
`
const Greetings = styled.span`
  ${font({
    weight: 400,
    Fmax: 28,
    Fmin: 24
  })}
  font-weight: 400;
  font-size: 28px;
`
const SmallText = styled.p`
  ${font({family: "'Nunito', sans-serif", weight: 700, Fmax: 50, Fmin: 32})}
  span {
    ${font({family: "'Nunito', sans-serif", weight: 700, color: theme.colors.accent})}
    white-space: nowrap
  }

  margin: 7px 0;
`
const MainTitle = styled.h1`
  ${font({
    family: "'Nunito Sans', sans-serif",
    weight: 400,
    Fmax: 24,
    Fmin: 18,
    letterSpacing: '0.06em',
    textTransform: 'lowercase'
  })}
  align-items: center;
  margin-bottom: 38px;
  p{
    display: none;
  }
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-right: 17px;
  margin-bottom: 57px;


  ::before {
    content: '';
    position: absolute;
    bottom: -24px;
    right: -24px;
    border-bottom: 450px solid ${theme.colors.secondaryBg};
    border-left: 450px solid transparent;
    z-index: -1;

    @media ${theme.media.ipad} {
      border-bottom: 300px solid ${theme.colors.secondaryBg};
      border-left: 280px solid transparent;
      bottom: -15px;
      right: -12px;
    }
  }
}`

export const S = {
    Main,
    Photo,
    Greetings,
    SmallText,
    MainTitle,
    PhotoWrapper
}