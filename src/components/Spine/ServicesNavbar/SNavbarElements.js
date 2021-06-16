import styled from 'styled-components';
import {Link as linkS} from 'react-scroll'
import {HashLink as linkH} from 'react-router-hash-link'

import { IoArrowBackCircleSharp as pm} from "react-icons/io5"

export const Nav = styled.nav`
    background-color: #ddd;
    height: 80px;
    width: 100%;
    display: 'flex';
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 720px){
        height: 80px;
        overflow-x: scroll !important;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index:1;
    width: 100%;
    justify-content: center;

    @media screen and (max-width:720px){
        display: grid;
        grid-template-rows: auto auto auto;
        justify-content: center;
    }
`

export const NavbarWrapper =styled.div`
    display: flex;
`

export const NavLogoWrapper = styled(linkH)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items:center;
    cursor: pointer;
    padding: 0 1rem;
`
export const NavLogo = styled(pm)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items:center;
    font-size: xx-large;
    color: #5a6c30;

    @media screen and (max-width: 720px){
        height: 58px;
        width: auto;
    }
`

export const NavMenu =styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`

export const NavItem = styled.li`
    height: 40px;
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

    @media screen and (max-width: 720px){
        font-size: small;
    }
`


