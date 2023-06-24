import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Contacts_Styles'


export const Contact:React.FC = () => {
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <SectionTitle>Get in touch</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                    <S.ContactsWrapper>
                        <S.Form>
                            <S.Field placeholder={'Name'}/>
                            <S.Field placeholder={'Subject'}/>
                            <S.Field placeholder={'Message'} as={'textarea'}/>
                            <Button type={'submit'}>Send</Button>
                        </S.Form>
                    </S.ContactsWrapper>

                    <S.MapWrapper>
                        <S.Link
                            src="https://yandex.by/map-widget/v1/?ll=27.555691%2C53.902735&masstransit%5BstopId%5D=station__9880204&mode=masstransit&tab=overview&z=12"
                            allowFullScreen></S.Link>
                    </S.MapWrapper>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
