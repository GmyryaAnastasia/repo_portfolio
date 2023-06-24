import React from 'react';
import photo from '../../../assets/images/photo_my.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {Button} from '../../../components/Button';
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <div>
                        <S.Greetings>Hello,</S.Greetings>
                        <S.SmallText>I'm <span>Anastasia Gmyrya</span></S.SmallText>
                        <S.MainTitle>
                            <p>FRONT-END DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['FRONT-END DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.MainTitle>
                        <Button as={'a'} href="#" download="">Download CV</Button>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
