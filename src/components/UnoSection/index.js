import React from 'react'
import {
    UnoContainer,
    UnoContent,
    Unologo,
    UnoPMText,
} from './UnoElements'
import Logo from '../../images/backg.png'

const UnoSection = () => {
    return (
        <UnoContainer id = "lead">
            <UnoContent>
                <Unologo src = {Logo} type = 'image/png' />
                <UnoPMText>
                    Parisara Mitra
                </UnoPMText>
            </UnoContent>
        </UnoContainer>
    )
}

export default UnoSection
