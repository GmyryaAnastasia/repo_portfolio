import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ModalContact} from "./ModalContact";
import ReactModal from 'react-modal';

const customStyles = {
    overlay: {
        zIndex: '99999'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
export const Slogan: React.FC = () => {
    const [contactIsOpen, setContactIsOpen] = useState(false)
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle> I am available for freelance</SectionTitle>
                    <Button onClick={() => {
                        setContactIsOpen(!contactIsOpen)
                    }}>Hire me</Button>
                    {contactIsOpen
                        ? <ReactModal style={customStyles}
                                      isOpen={contactIsOpen}
                                      onRequestClose={() =>setContactIsOpen(false)}>
                            <ModalContact setContactIsOpen={setContactIsOpen}/>
                        </ReactModal>
                        : ''}
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`

`
