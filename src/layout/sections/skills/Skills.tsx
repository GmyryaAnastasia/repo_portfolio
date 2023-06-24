import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        id: '01.',
        title: 'React',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '02.',
        title: 'Redux',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '03.',
        title: 'Typescript',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '04.',
        title: 'REST API',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '05.',
        title: 'Unit-test',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '06.',
        title: 'HTML/CSS',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '07.',
        title: 'Styled-Component',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '08.',
        title: 'Material-UI',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    },
    {
        id: '09.',
        title: 'GIT',
        description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet '
    }
]

export const Skills = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                    <Fade cascade={true}
                          damping={0.1}>
                        {skillData.map((s) => {
                            return <Skill id={s.id} key={s.id}
                                          title={s.title}
                                          description={s.description}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


