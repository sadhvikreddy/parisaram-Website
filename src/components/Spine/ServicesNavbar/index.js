import React from 'react'
import { 
    Nav,
    NavbarContainer,
    NavbarWrapper,
    NavLogoWrapper,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
 } from './SNavbarElements'




const scrollwith = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    const offset = -80;
    window.scrollTo({  top: y + offset, behavior:'smooth'});
}

const ServicesNavbar = ({toggle}) => {
        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavbarWrapper>
                        <NavMenu>
                        <NavLogoWrapper to="/#wwd" scroll = {(el) => scrollwith(el)}
                        >
                            <NavLogo />
                        </NavLogoWrapper>
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
                                >EPS Services</NavLinks>
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
