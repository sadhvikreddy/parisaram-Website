import React from 'react'
import {
    ContactContainer,
    ContactBG,
    NotesWrapper,
    NotesContainer,
    NotesContainer0,
    NotesContainer1,
    NotesContainer2,
    NotesLogo,
    NotesTitle,
    NotesInfo,
    SocialIcon
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
                        <NotesContainer 
                        data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="200"
                        href = 'tel: +919035881005'
                        >
                            <NotesLogo>
                                <HiPhone />
                            </NotesLogo>
                            <NotesTitle                            
                            >
                                Phone
                            </NotesTitle>
                            <NotesInfo>
                                9035881005
                            </NotesInfo>
                        </NotesContainer>
                        <NotesContainer0 
                         data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="200" 
                            href = 'mailto: admin@parisaram.com'
                        >
                            <NotesLogo>
                                <HiMail />
                            </NotesLogo>
                            <NotesTitle>
                                Email
                            </NotesTitle>
                            <NotesInfo>
                                admin@parisaram.com
                            </NotesInfo>
                        </NotesContainer0>
                        <NotesContainer1
                        data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="200"
                        href = 'https://goo.gl/maps/25j8Yd5E3APdHaUV8'
                       >
                            <NotesLogo>
                                <HiLocationMarker />
                            </NotesLogo>
                            <NotesTitle>
                                Registered Office
                            </NotesTitle>
                            <NotesInfo>
                                #412 1st E main road, Koramangala 8th Block, Behind Lawrence School, Bengaluru-560095
                            </NotesInfo>
                        </NotesContainer1>
                        <NotesContainer2
                    data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="200"
                        >
                            <SocialIcon href = "https://www.facebook.com/parisramitra">
                                <AiFillFacebook />
                            </SocialIcon>
                            <SocialIcon href = "https://instagram.com/parisaramitra?igshid=17dmsxjtxcaod" >
                                <AiFillInstagram />
                            </SocialIcon>
                            <SocialIcon href = "https://www.linkedin.com/company/parisara-mitra">
                                <AiFillLinkedin />
                            </SocialIcon>
                        </NotesContainer2>
                    </NotesWrapper>
            </ContactContainer> 
        </>
    )
}

export default Contact;
