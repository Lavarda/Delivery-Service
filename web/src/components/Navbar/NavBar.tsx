import React, { useState, Component } from 'react';
import {
    Container,
    HorizontalList,
    LinkStyled,
} from './NavBarStyle';

import {
    useLocation,
} from "react-router-dom";

import Buttons from '../Buttons/Buttons'
import Image from '../Image/Image'

const NavBar = (props) => {

    let location = useLocation()
    console.log("Teste",  location.pathname )

    let pages = props.type == 'landing_page' ? [
        // {
        //     name: 'Entregador',
        //     route: '/',
        // },
        // {
        //     name: 'Empresa',
        //     route: '/',
        // },
        // {
        //     name: 'Cliente',
        //     route: '/',
        // }
    ] : []

    return (
        <header>
            { location.pathname == '/login' || location.pathname == '/register' ? null : 
                <Container> 
                    <Image 
                        src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png"
                        width="100vw"
                        margin_left="5vw"
                        margin_right="10px"
                        margin_top="10px"
                    />
                    <HorizontalList>
                        {pages.map( (page,index) => {
                            return (
                                <li key={index}>
                                    <LinkStyled to={page.route}> {page.name} </LinkStyled>
                                </li>
                            )
                        })}
                        {props.type == 'landing_page' &&
                            <li>
                                <Buttons type="secondary" variant="outlined" color="primary" size="large" route="/login"> Entrar </Buttons>
                            </li>
                        }
                    </HorizontalList>
                </Container>
            }
        </header>
    );
}

export default NavBar;