import styled from 'styled-components'

export const Container = styled.div`
    height: 89vh;
    background: #ddd;
`

export const Wrapper = styled.div`
    padding: 25px;
    display: flex;
    align-content: center;
    justify-content: space-around;

    @media screen and (max-width: 720px){
        padding: 0px;

        flex-direction:  column;
    }

`

export const Photo = styled.img`
    height: auto;
    width: 42%;

    @media screen and (max-width: 720px){
        padding-bottom: 15px;
        width: 100%;
    }
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 34%;
    font-family: Oswald;
    align-items: center;

    @media screen and (max-width: 720px){
        width: 100%;
    }
`

export const TextHeading = styled.h1`
    color: #3f3d56;
    padding: 10px;

    @media screen and (max-width: 720px){

        font-size: 25px;
    }
`


export const TextBody = styled.p`
    font-size: 25px;
    padding: 10px;

    @media screen and (max-width: 720px){
        font-size: 16px;
    }
`

export const Hline = styled.div`
    border-left: 1px solid #3f3d56;
    height: 100px;
`
export const Vline = styled.div`
        border-bottom: 1px solid #3f3d56;
        height: 0px;
        width: 100px;
`