import React, {useState,useEffect} from 'react'
import { MdMenu } from "react-icons/md";
import { 
    Nav,
    NavbarContainer,
    NavbarWrapper,
    NavLogoWrapper,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
 } from './NavbarElements'
 import pm from '../../images/pmlogohd.png'

const Navbar = ({toggle}) => {

  let [Scrollin, setScrollin] = useState(false)

  let [navBarVis, SetnavBarVis] = useState(false)

  const Scr = () => {
    if(window.scrollY >= 300){
      setScrollin(true)
      if(document.getElementById('root').getBoundingClientRect().bottom >= 850){
          SetnavBarVis(false)
      }
      else{
          SetnavBarVis(true)
      }
    }
    else{
      setScrollin(false)
    }
  } 

  useEffect(() =>{
    window.addEventListener('scroll', Scr);
  },[])


        return (
            <>
                <Nav tvl = {Scrollin} navB = {navBarVis}>
                    <NavbarContainer>
                        <NavbarWrapper>
                        <NavLogoWrapper
                        >
                            <NavLogo src = {pm} type = 'image/png'/>
                        </NavLogoWrapper>
                        <MobileIcon onClick = {toggle}>
                            <MdMenu />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                        to="sdf"
                                        smooth = {true}
                                        duration = {1}
                                        spy = {true}
                                        offset=  {-80}
                                >
                                Our services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact"
                                          smooth = {true}
                                          duration = {500}
                                          spy = {true}
                                          exact = 'true'
                                          offset = {-80}
                                >Contact Us</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarWrapper>
                    </NavbarContainer>
                </Nav>
            </>
        )
}


export default Navbar
