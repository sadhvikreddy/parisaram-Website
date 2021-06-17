import React from 'react'
import {
    AboutContainer,
    AboutTextWrapper,
    AboutText,
    AboutBG,
    PMLogoBG
}
from './AboutElements'
import pml from '../../images/pmlogohd.png'

const AboutSection = () => {
    return (
        <>
            <AboutContainer id = 'about' >
                    <PMLogoBG src ={pml} type = 'img/png' />
                    <AboutBG>
                           All ABOUT PARISARA MITRA
                    </AboutBG>
                    <AboutTextWrapper
                    >
                        <AboutText>
                        Parisara Mitra is a Waste Management startup based in Bengaluru which provides end to end waste management solutions to Households, Industries, Warehouses and other Waste Generators. We pick Waste up directly from the Source, Segregate, Sort and Recycle them into numerous useful and Eco Friendly Products and decrease the amount of waste going into landfills and thus creating a Circular Economy.
                        </AboutText>
                    </AboutTextWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection
