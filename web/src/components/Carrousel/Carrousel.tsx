import React, { useState } from 'react';

import {
    Container,
    ItemCarrousel,
} from './CarrouselStyled'


import Card from '../../components/Card/Card'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DeliveryPng from '../../assets/images/delivery.png'


export const Carrousel = ( props ) => {

    const itensCarrousel = [
        {
            id: 1,
            img: 'https://cdn.discordapp.com/attachments/780100781483360266/781297812955856896/Sushi-delivery-como-montar-SAIPOS-Sistema-para-Restaurantes.jpg',
            title: 'Sushi',
            radius: '10px',
            width: '300vh',
        },
        {
            id: 2,
            img: 'https://cdn.discordapp.com/attachments/780100781483360266/781297808250372176/97.jpg',
            title: 'Pizza',
            radius: '10px',
            width: '300vh',
        },
        {
            id: 3,
            img: 'https://cdn.discordapp.com/attachments/780100781483360266/781298243115548682/c60588583f5a645089a6eddfcc175c13.jpg',
            title: 'Chinesa',
            radius: '10px',
            width: '300vh',
        },
        // {
        //     id: 4,
        //     img: 'https://cdn.discordapp.com/attachments/780100781483360266/781313037575520256/cans-of-coca-cola-are-displayed-in-a-food-trucks-cooler-on-news-photo-452533136-1553292415.jpg',
        //     title: 'Bebidas',
        //     radius: '10px',
        //     width: '300vh',
        // },
        // {
        //     id: 5,
        //     img: 'https://cdn.discordapp.com/attachments/780100781483360266/781313035096293406/19c02449401137.58b40fbcaa02e.jpg',
        //     title: 'Lanches',
        //     radius: '10px',
        //     width: '300vh',
        // },
        // {
        //     id: 6,
        //     img: 'https://cdn.discordapp.com/attachments/780100781483360266/781313332178583582/2dafb3e416e50dfc93e77756cfd47e10.jpg',
        //     title: 'Árabe',
        //     radius: '10px',
        //     width: '300vh',
        // },
    ]

    return ( 
        <Container>
            {itensCarrousel.map( (itens, index) => {
                return(
                    <ItemCarrousel key={index}>
                        <Card background_image={itens.img} title={itens.title} radius={itens.radius} width={itens.width}></Card>
                    </ItemCarrousel>
                )
            })}
        </Container>
    )
}

export default Carrousel;
