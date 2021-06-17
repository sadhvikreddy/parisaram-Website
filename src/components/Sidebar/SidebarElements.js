import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Link as linkS} from 'react-scroll'

export const Sidebarcontainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #5a6c30;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
    z-index:1002;
`

export const CloseIcon = styled(MdClose)`
    color: #dddfdf;

    &:hover {
        color: #000
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #dddfdf;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 60px)
    }
`

export const SidebarLink = styled(linkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #dddfdf;
    cursor: pointer;
    font-family: Oswald;

    &:hover {
        color: #000
    }
`

