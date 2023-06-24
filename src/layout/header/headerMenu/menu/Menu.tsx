import React from 'react';
import {S} from '../HeaderMenu_Styles';


const menuItems = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Works',
        href: 'works'
    },
    {
        title: 'Contacts',
        href: 'contacts'
    }]
export const Menu: React.FC<{ setMenuIsOpen?: (value: boolean) => void }> = (props: { setMenuIsOpen?: (value: boolean) => void }) => {

    const onClickHandler = () => {
        if (props.setMenuIsOpen) {
            props.setMenuIsOpen(false)
        }
    }

    return (
        <div>
            <ul>
                {menuItems.map((i, index) => {
                    return <S.MenuItem key={index}>
                        <S.NavLink
                            onClick={onClickHandler}
                            activeClass="active"
                            to={i.href}
                            smooth={true}
                            spy={true}
                            offset={10}>{i.title}
                            <S.Mask>
                                <span>{i.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{i.title}</span>
                            </S.Mask>
                        </S.NavLink></S.MenuItem>
                })}
            </ul>
        </div>
    );
};
