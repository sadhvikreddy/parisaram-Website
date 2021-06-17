import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import ServicesData from '../components/Spine/ServicesBody/ServicesData'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Navbar toggle = {toggle} />
          <Sidebar isOpen = {isOpen} toggle = {toggle} />
          <AboutSection />
          <ServicesData />
          <Contact />
          <Footer />
        </>
    )
}

export default Home;