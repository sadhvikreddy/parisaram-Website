import styled from 'styled-components'

export const ContactContainer = styled.div`
    height:89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ddd;
    padding-bottom: 200px;
    justify-content: center;


    @media screen and (max-width: 720px) {
        height:100%;
    }
`

export const ContactBG = styled.img`
    width: 100%;
    height: 80%;
    position: absolute;
    z-index: 1;

    @media screen and (max-width: 720px){
    }
`

export const NotesWrapper = styled.div`
    display: flex;
    z-index: 2;
    background:rgba(0,0,0,0.9 );
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    transition: transform .15s linear;
    border-radius: 5px;
    align-items: center;
    text-align: center;


    @media screen and (max-width: 720px){
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
    }

    @media screen and (max-width: 460px){
    }
`

export const NotesContainer = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration:none;
    padding: 50px;


    @media screen and (max-width: 720px){
        transform: none;
        transition: none;
        padding:20px;
    }

    @media screen and (max-width: 720px){
        transform: none;
        transition: none;
        padding:20px;
    }
`

export const NotesLogo = styled.div`
    font-size: 40px;
    color: #dddfdf;

    @media screen and (max-width: 720px){
        font-size: 30px;
    }
`

export const NotesTitle = styled.h2`
    font-family: Oswald;
    text-decoration: underline;
    color: #dddfdf;
`

export const NotesInfo = styled.p`
    font-family: Oswald;
    font-size: 22px;
    color: #dddfdf;
    max-width: 300px;

    @media screen and (max-width: 720px){
        font-size: 16px
    }
        `

export const SocialIcon = styled.a`
    font-size: 40px;
    color: #dddfdf;
    text-shadow: 3px 3px 5px rgba(150, 150, 150, 0.5);

    @media screen and (max-width: 720px){
        padding: 1px;
    }
`

export const Hline = styled.div`
    border-left: 1px solid #dddfdf;
    height: 100px;

    @media screen and (max-width: 720px){
        border-left: none;
        height: 0px;
        border-bottom: 1px solid #dddfdf;
        width: 100px;
    }
`

export const SocialCont = styled.div`
    display: flex;
`