import React from 'react'
import {
    AboutContainer,
    AboutTextWrapper,
    AboutText,
    AboutBG
}
from './AboutElements'

const AboutSection = () => {
    return (
        <>
            <AboutContainer id = 'about' >
                    <AboutBG>
                           ABOUT
                    </AboutBG>
                    <AboutTextWrapper
                    data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="700" data-aos-once= 'true'
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
