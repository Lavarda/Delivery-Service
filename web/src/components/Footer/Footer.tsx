import React from 'react'
import {
    useLocation,
} from "react-router-dom";

import { 
    Divider
} from '@material-ui/core';

import Image from '../Image/Image'

import { 
    Container,
    HrStyled,
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
                    <Image 
                        src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png"
                        width="32"
                        margin_right="10px"
                        margin_top="10px"
                    />
                    <Text>
                        Copyright Vitor Lavada
                    </Text>
                </ContainerInline>
            }
        </Container>
    )
}

export default Footer;