import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    background: linear-gradient(180deg,#ffffff 45%, #b3c9bd 85%);
`


export const AboutTextWrapper = styled.div`
    width: 60%;
    background-color: #dddfdf;
    align-items: center;
    background-color: rgba( 255, 255, 255, 0.30 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  //  display: none;

    
    @media screen and (max-width:720px) {
        width: 80%;
    }
    
    @media screen and (max-width: 480px) {
        width: 90%;
    }
`

export const AboutText = styled.p`
    font-family: Oswald;
    font-size: 22px;
    color: #3f3d56;
    padding: 8%;
    text-align: justify;
    transition: 0.13s;

    @media screen and (max-width: 720px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`

export const AboutBG = styled.h1`
    position: absolute;
    align-self: center;
    font-size: 450px;
    opacity: 0.5;
    font-family: Oswald;
  background: -webkit-linear-gradient(#5a6c30, #000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 720px) {
        font-size: 230px;
    }

    @media screen and (max-width: 480px) {
        font-size: 100px;
    }
`