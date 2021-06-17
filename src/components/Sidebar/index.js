import React from 'react'
import {
    Sidebarcontainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
}
from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <Sidebarcontainer isOpen = {isOpen} onClick = {toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" 
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = 'true'
                    offset = {-80}
                    onClick = {toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="services" 
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = 'true'
                    offset = {-80}
                    onClick = {toggle}>
                       Our Services
                    </SidebarLink>
                    <SidebarLink to="contact" 
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = 'true'
                    offset = {-80}
                    onClick = {toggle}>
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </Sidebarcontainer>
    )
}

export default Sidebar
