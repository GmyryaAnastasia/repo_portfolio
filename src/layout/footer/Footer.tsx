import React from 'react';
import {SocialIcon} from "./socialIcon/SocialIcon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'
import {Container} from '../../components/Container';


const SocialIconData = [
    {
        icon: 'github',
        width: '25px',
        height: '25px',
        viewBox: '0 0 25 24'
    },
    {
        icon: 'LinkedIn',
        width: '25px',
        height: '25px',
        viewBox: '0 0 24 24'
    },
    {
        icon: 'telegram',
        width: '25px',
        height: '25px',
        viewBox: '0 0 25 24'
    },
    {
        icon: 'messages',
        width: '25px',
        height: '25px',
        viewBox: '0 0 26 24'
    },
]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} wrap={'wrap'}>
                    <S.Name>Anastasia</S.Name>
                    <S.SocialList>
                        {SocialIconData.map((s, index) => {
                            return <SocialIcon icon={s.icon} key={index} width={s.width} height={s.height}
                                               viewBox={s.viewBox}/>
                        })}
                    </S.SocialList>

                    <S.Copyright>© 2023 Anastasia Gmyrya, All Rights Reserved. </S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};


