import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <Link onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={'code'}/>
        </Link>
    );
};

const Link=styled.a`
  color: ${theme.colors.fontSecondary};
`