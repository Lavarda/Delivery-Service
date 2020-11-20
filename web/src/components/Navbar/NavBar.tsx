import React, { useState, Component } from 'react';
import {
    Container,
    ImageContainer,
    HorizontalList,
    LinkStyled,
} from './NavBarStyle';

import Buttons from '../Buttons/Buttons'
import { FaBars } from 'react-icons/fa'

const NavBar = (props) => {

    let pages = props.type == 'landing_page' ? [
        {
            name: 'Entregador',
            route: '/',
        },
        {
            name: 'Empresa',
            route: '/',
        },
        {
            name: 'Cliente',
            route: '/',
        }
    ] : []

    return (
        <header>
            <Container> 
                <ImageContainer>
                    <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" alt="Logo"/>
                </ImageContainer>
                <HorizontalList>
                    {pages.map( (page,index) => {
                        return (
                            <li>
                               <LinkStyled to={page.route}> {page.name} </LinkStyled>
                            </li>
                        )
                    })}
                    {props.type == 'landing_page' &&
                        <li>
                            <Buttons variant="outlined" color="primary" size="large" route="/login"> Entrar </Buttons>
                        </li>
                    }
                </HorizontalList>
            </Container>
        </header>
    );
}

export default NavBar;