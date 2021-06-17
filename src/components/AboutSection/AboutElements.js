import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    background: linear-gradient(180deg,#ffffff 25%, #b3c9bd 45%, #ddd 76%);
    max-width: 100%;
`


export const AboutTextWrapper = styled.div`
    width: 60%;
    background-color: #dddfdf;
    align-items: center;
    background-color: rgba( 255, 255, 255, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: 999;
  //  display: none;

    
    @media screen and (max-width:720px) {
        width: 60%;
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
    z-index: 999;
    @media screen and (max-width: 720px) {
      //  width: 80%;
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const AboutBG = styled.h1`
    align-self: center;
    font-size: 50px;
    opacity: 1;
    font-family: Oswald;
    background: #5a6c30;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 10px;
    z-index: 999;
    text-align: center;

  @media screen and (max-width: 720px) {
        font-size: 20px;

    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const PMLogoBG = styled.img`
    position: absolute;
    right:0;
    top:30%;
    z-index: 1;
    width: auto;
    height: 60vh;

    @media screen and (max-width: 720px){
        top:60%;
        height:30vh;
    }
`