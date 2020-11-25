import React, { useState } from 'react';

import { 
    Container,
    AnimationImage,
} from './LandingPageStyle'

import SearchBox from '../../components/SearchBox/SearchBox'

import AnimationLandingPage from '../../assets/images/delivery.png'

const LandingPage = () => {

    return (
        <Container>
            {/* <AnimationImage src={AnimationLandingPage} /> */}
            <AnimationImage src="https://cdn.discordapp.com/attachments/780100781483360266/780970974274388000/online-food-delivery-industry.png" alt="Delivery" height="40%" />
            <SearchBox type="text" placeholder="Pesquise a sua Empresa"></SearchBox>
        </Container>
    );
}

export default LandingPage;