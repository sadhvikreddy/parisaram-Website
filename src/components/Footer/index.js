import React from 'react'
import {
    FooterContainer,
    FooterContent,
    LogoWrap,
    PMlogo,
    Hline,
    FooterMenu,
    FooterLink,
    SocialWrapper,
    SocialCont,
    SocialIcon,
    MySignWrapper,
    Sign
}
from './FooterElements'

import logoo from '../../images/pmlogohd.png'

import FbIcon from '../../images/SocialIcons/facebook.png'
import IgIcon from '../../images/SocialIcons/instagram.png'
import LiIcon from '../../images/SocialIcons/linkedin.png'

import sign from '../../images/MySign.png'

const scrollwith = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({  top: y , behavior:'smooth'});
}


const Footer = () => {
    return (
        <>
            <FooterContainer
            >
                <FooterContent 
                >
                    <LogoWrap 
                        to = '/#' 
                        scroll = {(el) => scrollwith(el)}
                    >
                    <PMlogo  src = { logoo } type = 'img/png' /> 
                    </LogoWrap>
                    <Hline></Hline>
                    <FooterMenu>
                    <FooterLink to="about" 
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = 'true'  
                    scroll = {(el) => scrollwith(el)}
                    >
                        About
                    </FooterLink>
                    <FooterLink to="sdf" 
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = 'true'>
                        Our Services
                    </FooterLink>
                    <FooterLink to="contact" 
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = 'true'
                    >
                        Contact Us
                    </FooterLink>
                </FooterMenu>
                    <Hline></Hline>
                    <SocialWrapper>
                        <SocialCont  href = "https://www.facebook.com/parisramitra">
                            <SocialIcon src = {FbIcon}  type = 'img/png'/>
                        </SocialCont>
                        <SocialCont  href = "https://instagram.com/parisaramitra?igshid=17dmsxjtxcaod">
                            <SocialIcon src = {IgIcon} type = 'img/png' />
                        </SocialCont>
                        <SocialCont  href = "https://www.linkedin.com/company/parisara-mitra">
                            <SocialIcon src = {LiIcon} type = 'img/png' />                          
                        </SocialCont>
                    </SocialWrapper>
                    <MySignWrapper href = 'https://www.linkedin.com/in/sadhvik-reddy-245a02191/'
                    >
                        <Sign src = {sign} tpe = "img/png"/>
                </MySignWrapper>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

export default Footer
