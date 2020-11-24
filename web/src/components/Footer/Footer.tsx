import React from 'react'
import {
    useLocation,
} from "react-router-dom";

import { 
    Divider
} from '@material-ui/core';

import { 
    Container,
    HrStyled,
    ImageContainer,
    ContainerInline,
    Text,
} from './FooterStyle'

const Footer = () => {

    let location = useLocation()

    console.log("Teste",  location.pathname )

    return(
        <Container>
            { location.pathname == '/login' || location.pathname == '/register' ? null : 
                <ContainerInline>
                    <ImageContainer>
                        <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" alt="Logo"/>
                    </ImageContainer>
                    <Text>
                        Copyright Vitor Lavada
                    </Text>
                </ContainerInline>
            }
        </Container>
    )
}

export default Footer;