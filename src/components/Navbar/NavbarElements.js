import styled from 'styled-components';
import {Link as linkS} from 'react-scroll'

export const Nav = styled.nav`
    background-color: #fff;
    height: 80px;
    width: 100%;
    display: ${({navB}) => navB ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 1000;

    @media screen and (max-width: 720px){
        transition: 0.8s all ease;
        height: 80px;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    justify-content: center;

    @media screen and (max-width:720px){
        justify-content: center;
    }
`

export const NavbarWrapper =styled.div`
    display: flex;
    padding-right: 40px;
`

export const NavLogoWrapper = styled(linkS)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items:center;
    margin-left: 12px;
    cursor: pointer;
`
export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items:center;
    margin-left: 12px;
    height: 65px;
    width:auto;

    @media screen and (max-width: 720px){
        height: 58px;
        width: auto;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 720px) {
    display: block;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    }
`

export const NavMenu =styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 720px) {
        display: none;

    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(linkS)`
    color: #5a6c30;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;
    font-family: Oswald;

    &:hover{
        border-top: 5px solid #5a6c30;
    }

    &.active{
        border-top: 5px solid #5a6c30;
    }
`

