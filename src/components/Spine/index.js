import React from 'react'

import a from '../../images/SpineImages/a.svg'
import b from '../../images/SpineImages/b.svg'
import c from '../../images/SpineImages/c.svg'
import d from '../../images/SpineImages/d.svg'
import e from '../../images/SpineImages/e.svg'
import g from '../../images/SpineImages/g.svg'

import {
    SpineContainer,
    SpineCardsWrapper,
    SpineCardsWrapper1,
    Card,
    Cardimg,
    CardText
}
from './SpineElements'

const scrollwith = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    const offset = -80;
    window.scrollTo({  top: y + offset, behavior:'smooth'});
}

const Spine = () => {
    return (
        <>
            <SpineContainer id = "wwd">
                <SpineCardsWrapper1 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="800">
                    <Card 
                        to = '/services/path#mapp' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {a} type = 'image/svg' />
                        <CardText>Mobile Application</CardText>
                    </Card>
                    <Card
                        to = '/services/path#d2dc' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {g} type = 'image/svg' />
                        <CardText>Door-to-Door Services</CardText>
                    </Card>
                    <Card
                        to = '/services/path#recsto' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {b} type = 'image/svg' />
                        <CardText>Recycled Store</CardText>
                    </Card>
                    <Card
                        to = '/services/path#epss' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {e} type = 'image/svg' />
                        <CardText>EPR Services</CardText>
                    </Card>
                    <Card
                        to = '/services/path#aware' scroll = {(el => {scrollwith(el)})}
                    >

                        <Cardimg src = {d} type = 'image/svg' />
                        <CardText>Awareness</CardText>
                    </Card>
                    <Card
                        to = '/services/path#impact' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {c} type = 'image/svg' />
                        <CardText>Impact</CardText>
                    </Card>
                    </SpineCardsWrapper1>
                <SpineCardsWrapper data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine"  data-aos-duration="300">
                <Card
                    to = '/services/path#mapp' scroll = {(el => {scrollwith(el)})}
                >
                        <Cardimg src = {a} type = 'image/svg' />
                        <CardText>Mobile Application</CardText>
                    </Card>
                    <Card
                        to = '/services/path#d2dc' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {g} type = 'image/svg' />
                        <CardText>Door-to-Door Services</CardText>
                    </Card>
                    <Card
                        to = '/services/path#recsto' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {b} type = 'image/svg' />
                        <CardText>Recycled Store</CardText>
                    </Card>
                    <Card
                        to = '/services/path#epss' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {e} type = 'image/svg' />
                        <CardText>EPR Services</CardText>
                    </Card>
                    <Card
                        to = '/services/path#aware' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {d} type = 'image/svg' />
                        <CardText>Awareness</CardText>
                    </Card>
                    <Card
                        to = '/services/path#impact' scroll = {(el => {scrollwith(el)})}
                    >
                        <Cardimg src = {c} type = 'image/svg' />
                        <CardText>Impact</CardText>
                    </Card>
                    </SpineCardsWrapper>
            </SpineContainer>
        </>
    )
}

export default Spine