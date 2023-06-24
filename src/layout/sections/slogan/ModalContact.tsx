import React from 'react';
import {S} from "../contact/Contacts_Styles";
import {Button} from "../../../components/Button";
import {C} from "../slogan/ModalContact_Styles";

export const ModalContact: React.FC<{ setContactIsOpen: (value: boolean) => void }> = (props: { setContactIsOpen: (value: boolean) => void }) => {
    return (
        <C.StyledModal>
            <C.ButtonClose onClick={() => props.setContactIsOpen(false)}>X</C.ButtonClose>
            <C.TextWrapper>
                <p>Have a project?
                    I’m ready to help you. You just type details below,and/or send us a file.</p>
            </C.TextWrapper>

            <S.Form>
                <S.Field placeholder={'Name'}/>
                <S.Field placeholder={'Your email'}/>
                <S.Field placeholder={'Project title'}/>
                <S.Field placeholder={'Message'} as={'textarea'}/>
                <Button type={'submit'} onClick={() => props.setContactIsOpen(false)}>Send</Button>
            </S.Form>
        </C.StyledModal>

    );
};


