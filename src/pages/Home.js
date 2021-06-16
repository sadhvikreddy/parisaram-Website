import React, {useState} from 'react'
import UnoSection from '../components/UnoSection'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Spine from '../components/Spine'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Navbar toggle = {toggle} />
          <UnoSection />
          <Sidebar isOpen = {isOpen} toggle = {toggle} /> 
          <AboutSection />
          <Spine />
          <Contact />
          <Footer />
        </>
    )
}

export default Home;