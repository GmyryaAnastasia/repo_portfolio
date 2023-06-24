import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from '../Footer_Styles'

type SocialIcon = {
    icon?: string,
    viewBox?: string,
    height?: string,
    width?: string
}


export const SocialIcon: React.FC<SocialIcon> = (props: SocialIcon) => {
    return (
        <S.SocialItem>
            <S.SocialIconLink>
                <Icon iconId={props.icon} width={props.width} height={props.height} viewBox={props.viewBox}/>
            </S.SocialIconLink>
        </S.SocialItem>
    );
};
