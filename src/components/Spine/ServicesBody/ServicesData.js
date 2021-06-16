import React from 'react'
import ServicesTemp from './ServicesTemp'
import a from '../../../images/SpineImages/Services/mapp.png'
import b from '../../../images/SpineImages/Services/d2dc.png'
import c from '../../../images/SpineImages/Services/resto.png'
import d from '../../../images/SpineImages/Services/epr.png'
import e from '../../../images/SpineImages/Services/awa.png'
import f from '../../../images/SpineImages/Services/imp.png'


const mac = 'Schedule pickup of your scrap, waste or trash items through our reliable Mobile Application. Our application is coming soon to App Store and Play store. Sell Trash and get paid!'
const dcs = 'We collect waste from your doorstep at timely intervals and make sure to reduce your disposal problems'
const res = 'Buy Eco-friendly Recycled products through our Mobile Application which has Wide range of Products'
const epr = 'EPR Services means responsibility of any Producer, Importer, Brand Owner of Products such as plastic, E-Waste ,etc for environmentally sound management, till end-of-life of the products. We help PIBOs with the registration and Compliance process with CPCB'
const awa = 'We create awareness among people through our social media posts, videos and various other programs and educate them about the effective waste management'
const impa = 'Total Waste Collected: 121KG '

const ServicesData = () => {
    return (
        <>
            <ServicesTemp ids = "mapp" heading = "MOBILE APPLICATION" matter = {mac} imag = {a} />
            <ServicesTemp ids = "d2dc" heading = "DOOR TO DOOR COLLECTION SERVICE" matter = {dcs} imag = {b} />
            <ServicesTemp ids = 'recsto' heading = "RECYCLED STORE" matter = {res} imag = {c} />
            <ServicesTemp ids = 'epss' heading = "EXTENDED PRODUCER RESPONSIBILITY" matter = {epr} imag = {d} />
            <ServicesTemp ids = 'aware' heading = "AWARENESS PROGRAMS" matter = {awa} imag = {e} />
            <ServicesTemp ids = 'impact' heading = "OUR IMPACT" matter = {impa} imag = {f} />
        </>
    )
}

export default ServicesData

