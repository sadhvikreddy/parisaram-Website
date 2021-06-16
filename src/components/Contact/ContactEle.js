import styled from 'styled-components'

export const ContactContainer = styled.div`
    height:89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ddd;
    padding-bottom: 200px;


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
    padding-top: 90px;
    max-width: 600px;
    grid-gap: 10px;
    display: grid;
    grid-template-columns: auto auto;
    justify-self: center;
    z-index:2;

    @media screen and (max-width: 720px){
        padding-top:190px;
        padding-left: 20px;
        padding-right: 20px;
        grid-template-columns: repeat(2, auto);
    }

    @media screen and (max-width: 460px){
        padding-top:150px;
        grid-template-columns: repeat(2, auto);
    }
`

export const NotesContainer = styled.a`
    padding: 30px;
    text-decoration:none;
    background:rgba(0,0,0,0.7);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    transform: rotate(6deg);
    transition: transform .15s linear;
    border-radius: 18px;

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
export const NotesContainer0 = styled.a`
    padding: 30px;
    text-decoration:none;
    background:rgba(0,0,0,0.7);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    transform: rotate(-4deg);
    transition: transform .15s linear;
    border-radius: 18px;

    @media screen and (max-width: 720px){
        transform: none;
        transition: none;
        padding: 20px
    }

    @media screen and (max-width: 720px){
        transform: none;
        transition: none;
    }
`

export const NotesContainer1 = styled.a`
    padding: 30px;
    text-decoration:none;
    background:rgba(0,0,0,0.7);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    transform: rotate(-6deg);
    transition: transform .15s linear;
    border-radius: 18px;

    @media screen and (max-width: 720px){
        transform: none;
        transition: none;
        padding: 20px;
    }
`

export const NotesContainer2 = styled.div`
    padding: 30px;
    text-decoration:none;
    background:rgba(0,0,0,0.7);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    transform: rotate(4deg);
    transition: transform .15s linear;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 18px;
    
    @media screen and (max-width: 720px){
        transform: none;
        transition: none;
        padding:10px;
        flex-direction: column;
    }
`


export const NotesLogo = styled.div`
    font-size: 40px;
    text-align: center;
    color: #dddfdf;

    @media screen and (max-width: 720px){
        font-size: 16px;
    }
`

export const NotesTitle = styled.h2`
    text-align: center;
    font-family: Oswald;
    text-decoration: underline;
    color: #dddfdf;
`

export const NotesInfo = styled.p`
    font-family: Oswald;
    font-size: 22px;
    text-align: center;
    color: #dddfdf;
    padding-top: 20px;

    @media screen and (max-width: 720px){
        font-size: 14px;
    }
`

export const SocialIcon = styled.a`
    font-size: 50px;
    padding: 14px;
    color: #dddfdf;
    text-shadow: 3px 3px 5px rgba(150, 150, 150, 0.5);

    @media screen and (max-width: 720px){
        padding: 1px;
    }

`
