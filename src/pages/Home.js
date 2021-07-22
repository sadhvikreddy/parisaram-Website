import React, { useState, lazy, Suspense } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
// import ServicesData from '../components/Spine/ServicesBody/ServicesData'
import Spinner from '../spinner/Spinner'
import {SpinnerWrapper} from '../spinner/SpinnerWrapper'

const ServicesData = lazy(() => import('../components/Spine/ServicesBody/ServicesData'))


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
          <Suspense fallback = {<SpinnerWrapper><Spinner></Spinner></SpinnerWrapper>} >
            <ServicesData />
          </Suspense>
          <Contact />
          <Footer />
        </>
    )
}

export default Home;