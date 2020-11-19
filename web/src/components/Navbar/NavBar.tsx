import React, { useState, Component } from 'react';
import {
    Container,
    ImageContainer,
    HorizontalList,
    LinkStyled,
} from './NavBarStyle';
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
    return (
        <header>
            <Container> 
                <ImageContainer>
                    <img src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" alt="Logo"/>
                </ImageContainer>
                <HorizontalList>
                    <li>
                        <LinkStyled to="/">Entregador</LinkStyled>
                    </li>
                    <li>
                        <LinkStyled to="/">Empresa</LinkStyled>
                    </li>
                    <li>
                        <LinkStyled to="/">Cliente</LinkStyled>
                    </li>
                </HorizontalList>
            </Container>
        </header>
    );
}

export default NavBar;