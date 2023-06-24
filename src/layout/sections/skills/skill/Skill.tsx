import React from 'react';
import {S} from '../Skills_Styles';

type SkillPropsType = {
    id?: string
    title: string
    description: string
}


export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <S.SkillNumber>{props.id}</S.SkillNumber>
            <S.TextContainer>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillDescription>{props.description}</S.SkillDescription>
            </S.TextContainer>
        </S.Skill>
    );
};
