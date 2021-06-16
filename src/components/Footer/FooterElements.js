import styled from 'styled-components';
import {
    HashLink as linkS
}
from 'react-router-hash-link'

export const FooterContainer = styled.footer`
    background-color: #101522;
    max-width: 100%;
`


export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    margin: 0 auto;

    @media screen and (max-width: 1080px){
        flex-direction: column;
    }

`

export const Hline = styled.div`
    border-left: 1px solid #dddfdf;
    height: 100px;

    @media screen and (max-width: 1080px) {
        border-left: none;
        border-bottom: 1px solid #dddfdf;
        height: 0px;
        width: 50px;
    }
`


export const FooterMenu = styled.div`
    display: flex;
    justify-content:center;

    @media screen and (max-width: 1080px){
        display: flex;
        flex-direction:column;
        padding-top: 10px;
        padding-bottom: 10px;
    }
`

export const FooterLink = styled(linkS)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:16px;
    text-align: left;
    width: 100px;
    box-sizing: border-box;
    color: #fff;
    font-family: Oswald;
    cursor: pointer;
    text-decoration: none;

    @media screen and (max-width: 420px) {
        margin: 0;
        width: 100%;
        padding-bottom: 25px;
    }

    &:hover {
        color: #5a6c30;
    }
`

export const LogoWrap = styled(linkS)``

export const PMlogo = styled.img`
    height: 150px;
    width: auto;
    padding: 50px;
    align-self: center;

    @media screen and (max-width: 720px){
        height: 80px;
        width: 71px;
        padding: 30px;
    }
`

export const SocialCont = styled.a`
cursor: pointer;
`

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;

    @media screen and (max-width: 1080px){
        padding: 30px
    }
`

export const SocialIcon = styled.img`
   height: 50px;
    width: 50px;
`
export const MySignWrapper = styled.a`
    cursor: pointer;
    padding-left: 15px;
    @media screen and (max-width:1080px) {
    padding-bottom: 15px;
    }
`

export const Sign = styled.img`
    width: auto;
    height: 40px;
    box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
    -webkit-box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
    -moz-box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
`
