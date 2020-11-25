import React, { useState, Component } from 'react';
import {
    Container,
    ImageContainer,
    HorizontalList,
    LinkStyled,
} from './NavBarStyle';

import {
    useLocation,
} from "react-router-dom";

import Buttons from '../Buttons/Buttons'

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
                    <ImageContainer>
                        <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" alt="Logo"/>
                    </ImageContainer>
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