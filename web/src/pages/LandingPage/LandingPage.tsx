import React, { useState } from 'react';

import { 
    Container,
    AnimationImage,
} from './LandingPageStyle'

import SearchBox from '../../components/SearchBox/SearchBox'
import Image from '../../components/Image/Image'
import Carrousel from '../../components/Carrousel/Carrousel'

import AnimationLandingPage from '../../assets/images/delivery.png'

const LandingPage = () => {

    return (
        <Container>
            <Image 
                src="https://cdn.discordapp.com/attachments/780100781483360266/780970974274388000/online-food-delivery-industry.png" 
                width="30%"
                margin_left="0px"
                margin_right="0px"
                margin_bottom="0px"
                margin_top="40px"
                border_radius="20px"
            />
            <SearchBox type="text" placeholder="Pesquise a sua Empresa"></SearchBox>

            <Carrousel name="Teste"></Carrousel>
        </Container>
    );
}

export default LandingPage;