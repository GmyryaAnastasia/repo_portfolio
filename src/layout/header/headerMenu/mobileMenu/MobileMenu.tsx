import React, {useState} from 'react';
import {Menu} from '../menu/Menu';
import {S} from '../HeaderMenu_Styles';

export const MobileMenu: React.FC= () => {
    const [menuIsOpen,setMenuIsOpen]=useState<boolean>(false)
    const BurgerBtnClick=()=>setMenuIsOpen(!menuIsOpen)
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={BurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>setMenuIsOpen(false)}>
                <Menu setMenuIsOpen={setMenuIsOpen}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

