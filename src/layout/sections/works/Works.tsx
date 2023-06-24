import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {Container} from "../../../components/Container";
import proj1 from '../../../assets/images/proj-1.webp'
import proj2 from '../../../assets/images/proj-2.webp'
import proj3 from '../../../assets/images/prog-3.webp'
import proj4 from '../../../assets/images/proj-4.webp'
import proj5 from '../../../assets/images/proj-5.webp'
import proj6 from '../../../assets/images/proj-6.webp'
import {S} from './Works_Styles'

const workData = [
    {
        title: 'Social Network',
        src: proj1,
        description: 'Lorem mdkfmkldesnvpsnmb;vkdfmb;mf;bndfmbpzmb[fdxc'
    },
    {
        title: 'Social Network',
        src: proj2,
        description: 'Lorem mdkfmkldesnvpsnmb;vkdfmb;mf;bndfmbpzmb[fdxc'
    },
    {
        title: 'Social Network',
        src: proj3,
        description: 'Lorem mdkfmkldesnvpsnmb;vkdfmb;mf;bndfmbpzmb[fdxc'
    },
    {
        title: 'Social Network',
        src: proj4,
        description: 'Lorem mdkfmkldesnvpsnmb;vkdfmb;mf;bndfmbpzmb[fdxc'
    },
    {
        title: 'Social Network',
        src: proj5,
        description: 'Lorem mdkfmkldesnvpsnmb;vkdfmb;mf;bndfmbpzmb[fdxc'
    },
    {
        title: 'Social Network',
        src: proj6,
        description: 'Lorem mdkfmkldesnvpsnmb;vkdfmb;mf;bndfmbpzmb[fdxc'
    },
]


export const Works:React.FC = () => {
    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>Latest Works</SectionTitle>
                <FlexWrapper justify={'space-evenly'} wrap={'wrap'}>
                    {workData.map((w,index) => {
                        return <Work key ={index} title={w.title} src={w.src}
                                     description={w.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

