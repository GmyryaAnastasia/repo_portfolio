import styled from "styled-components";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

const Works = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 40px
  }
`

const Work = styled.div`
  max-width: 330px;
  width: 100%;
  height: 422px;
`
const ImageWrapper = styled.div`
  position: relative;
  height: 330px;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
      transition: ${theme.animations.transition};
      
      @media ${theme.media.mobile} {
        display: none;
      }
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    background-color: unset;
    border: none;
    width: 100%;
    height: 100%;
    transition: ${theme.animations.transition};
  }

  @media ${theme.media.mobile} {
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
      transition: ${theme.animations.transition};
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const TextWrapper = styled.div`
  margin-top: 25px;
`


const Title = styled.h3`
  margin-bottom: 10px;
`
const Text = styled.p`
  word-wrap: break-word;
  font-style: italic;
  letter-spacing: 0.06em;
`

const Link = styled.a`
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    TextWrapper,
    Title,
    Text,
    Link
}