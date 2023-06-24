import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

//Menu
const MenuItem = styled.li`
  position: relative;
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.fontSecondary};
  transition: ${theme.animations.transition};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const NavLink = styled(Link)`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 24px;
  text-decoration: none;
  color: transparent;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: #F8EEEF;
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
    transition: ${theme.animations.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: #F8EEEF;
      font-weight: 900;

      & + ${Mask} {
        transform: skewX(12deg) translateX(-3px);
        color: #F8EEEF;
        font-weight: 900;
      }
    }
  }
`


//MobileMenu
const MobileMenu = styled.nav`
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${theme.colors.accent};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 1s ease-in-out;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);

    ul {
      gap: 40px;
    }
  `}
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.secondaryBg};
    position: absolute;
    left: 40px;
    bottom: 70px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.secondaryBg};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }
  ;

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.secondaryBg};
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

//DesktopMenu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`


export const S = {
    NavLink, MenuItem, Mask, MobileMenu, MobileMenuPopup, BurgerButton, DesktopMenu
}