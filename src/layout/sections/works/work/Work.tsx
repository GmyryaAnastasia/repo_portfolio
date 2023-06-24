import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles'

type WorkPropsType = {
    title: string
    description: string
    src: string
}


export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src}/>
                <Button>View Project</Button>
            </S.ImageWrapper>

            <S.TextWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.description}</S.Text>
                <S.Link href={'#'}></S.Link>
            </S.TextWrapper>

        </S.Work>
    );
};

