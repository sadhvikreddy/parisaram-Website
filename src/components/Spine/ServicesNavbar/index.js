import React from 'react'
import { 
    Nav,
    NavbarContainer,
    NavbarWrapper,
    NavMenu,
    NavItem,
    NavLinks,
 } from './SNavbarElements'






const ServicesNavbar = ({toggle}) => {
        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavbarWrapper>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="mapp"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >Mobile App</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="d2dc"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >D2D Collection</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="recsto"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >Recycled Store</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="epss"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >EPR Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="aware"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >Awareness</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="impact"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >Impact</NavLinks>
                            </NavItem>  
                        </NavMenu>
                    </NavbarWrapper>
                    </NavbarContainer>
                </Nav>
            </>
        )
}


export default ServicesNavbar
