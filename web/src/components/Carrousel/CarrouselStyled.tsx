import styled, { css } from 'styled-components'

interface ItemCarrouselProps {
    background_image?: any;
    radius?:any;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    
    margin-top: 5.5vh;
    /* background-color: black; */
`

export const ItemCarrousel = styled.div<ItemCarrouselProps>`
    min-width: 25%;
    min-height: 25vh;

    border-radius: 10px;
`