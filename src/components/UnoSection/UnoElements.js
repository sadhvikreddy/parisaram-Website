
import styled from 'styled-components'

export const UnoContainer = styled.div`
  //  background: #dddfdf;
  //  background: linear-gradient(270deg,#dddfdf 65%, #ffffff 100%);
   // background: -webkit-linear-gradient(270deg,#dddfdf 65%, #ffffff 100%);
  //  background: -moz-linear-gradient(270deg,#dddfdf 65%, #ffffff 100%);
    justify-content: center;
    align-items: center;
    height: 89vh;
    z-index: 1;
`

export const UnoContent = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
    } 
`

export const Unologo = styled.img`
    align-items: center;
    height: 70vh;


    @media screen and (max-width: 720px){
        padding-top: 25%;
        width: 100%;
        height: auto;
    } 
`


export const UnoPMText = styled.p`
    font-size: 45px;
    color: #5a6c30;
    font-family: Oswald;
    padding-top: 30px;

    @media screen and (max-width: 720px){
        font-size: 45px;
    }

    @media screen and (max-width: 320px){
        font-size: 30px
    }
`

export const UnoAboutContainer = styled.div`
    position: absolute;
    color: #5a6c30;   
    width: 500px;
    height: 500px;
    font-family: Oswald;
    text-align: justify;
    top: 40%;
`
export const UnoAboutText = styled.h3`

`