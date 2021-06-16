import styled from 'styled-components'
import {HashLink as linkR} from 'react-router-hash-link'



export const SpineContainer = styled.div`
    height: 89vh;
    background: linear-gradient(180deg,#b3c9bd 0%, #848a87 45%, #ddd 66%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;

    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 60px;
        padding-top: 60px;
        height: 100%;
    }

    @media screen and (max-width: 460px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 40px;
        padding-top: 40px;
        height: 100%;
    }
`

export const SpineCardsWrapper = styled.div`
    display: none;

    @media screen and (max-width: 720px){
        display: grid;
        grid-template-columns: repeat(2, 200px);
        grid-gap: 10px;
        
    }

    @media screen and (max-width: 460px){
        display: grid;
        grid-template-columns: repeat(2, 120px);
        grid-gap: 15px;
        align-self: center;
    }
`

export const SpineCardsWrapper1 = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    padding-bottom: 20px;

    @media screen and (max-width: 720px){
        display: none;
    }

    @media screen and (max-width: 460px){
        display: none;
    }
`

export const Card = styled(linkR)`
    box-shadow: 20px -20px 75px rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.5);
    background-color: rgba(255,255,255,0.5);
   // box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: row;
    text-decoration: none;

    


    &:hover{
        border: 1px solid rgba(255,255,255,0.5);
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    }

    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 460px){
        display: flex;
        flex-direction: column;
    }
`

export const Cardimg = styled.img`
    height: auto;
    width: 150px;
    padding: 20px;
    align-items:center;

    @media screen and (max-width: 720px){
        padding-left: 5px;
        padding-top: 5px;
        padding-bottom: 0px;
        padding-right: 5px;
        height: 100px;
        width: 100px
    }

    @media screen and (max-width: 460px) {
        padding: 2px;
        height: 100px;
        width: 100px
    }
`

export const CardText = styled.h3`
    align-self: flex-end;
    justify-content: center;
    text-align: center;
    padding: 20px;
    font-family: Oswald;
    color: #3f3d56;
    font-size: 21px;

    @media screen and (max-width: 720px){
        align-self: flex-end;
        font-size: 15px;
        text-align: center;

    }

    @media screen and (max-width: 460px){
        max-width: 100px;
        padding: 2px;
        font-size: 12px;
        align-self: center;
    }
`
