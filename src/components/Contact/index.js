import React from 'react'
import {
    ContactContainer,
    ContactBG,
    NotesWrapper,
    NotesContainer,
    NotesLogo,
    NotesTitle,
    NotesInfo,
    SocialIcon,
    Hline,
    SocialCont
}
from './ContactEle'

import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import bgi from '../../images/Cont.svg'


const Contact = () => {
    return (
        <>
            <ContactContainer id = "contact">
                <ContactBG src = {bgi} type = 'image/svg' />
                    <NotesWrapper>
                        <NotesContainer>
                            <NotesLogo>
                                <HiPhone />
                            </NotesLogo>
                            <NotesTitle                            
                            >
                                Phone
                            </NotesTitle>
                            <NotesInfo
                                href = 'tel:9035881005'
                            >
                                9035881005
                            </NotesInfo>
                        </NotesContainer>
                        <Hline />
                        <NotesContainer>
                            <NotesLogo>
                                <HiMail />
                            </NotesLogo>
                            <NotesTitle>
                                Email
                            </NotesTitle>
                            <NotesInfo
                                href = 'mailto:admin@parisaram.com'
                            >
                                admin@parisaram.com
                            </NotesInfo>
                            </NotesContainer>
                            <Hline />
                            <NotesContainer>
                            <NotesLogo>
                                <HiLocationMarker />
                            </NotesLogo>
                            <NotesTitle>
                                Registered Office
                            </NotesTitle>
                            <NotesInfo>
                                Koramangala 8th Block, Behind Lawrence School, Bengaluru-560095
                            </NotesInfo>
                            </NotesContainer>
                            <Hline />
                        <NotesContainer>
                        <SocialCont>
                                <SocialIcon href = "https://www.facebook.com/parisramitra">
                                    <AiFillFacebook />
                                </SocialIcon>
                                <SocialIcon href = "https://instagram.com/parisaramitra?igshid=17dmsxjtxcaod" >
                                    <AiFillInstagram />
                                </SocialIcon>
                                <SocialIcon href = "https://www.linkedin.com/company/parisara-mitra">
                                    <AiFillLinkedin />
                            </SocialIcon>
                        </SocialCont>
                        </NotesContainer>
                    </NotesWrapper>
            </ContactContainer> 
        </>
    )
}

export default Contact;
