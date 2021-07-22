import React, {useEffect} from 'react'
import {
    Container,
    Wrapper,
    Photo,
    TextContainer,
    TextHeading,
    TextBody,
    Vline
}
from './ServicesTempElements'
import { animateScroll as scroll } from 'react-scroll'

const ServicesTemp = (props) => {
    useEffect(() => {
        scroll.scrollToTop();
    }, [])

    return (
        <>
            <Container id = {props.ids}>
                <Wrapper>
                    <Photo
                    data-aos="zoom-in-right" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="800"
                    src = {props.imag} type = 'img/png'/>
                    <TextContainer data-aos="zoom-in-left" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="8000">
                        <TextHeading>
                            {props.heading}
                        </TextHeading>
                        <Vline />
                    <TextBody>
                            {props.matter}
                    </TextBody>
                    </TextContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default ServicesTemp
