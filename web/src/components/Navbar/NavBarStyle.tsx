import styled from 'styled-components'

import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.background} !important;
    height: 10vh;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: relative;
`

export const ImageContainer = styled.div`

    position: absolute;
    left: 5vw;

    img {
        max-width: 10vw;
        max-height: 10vh;
    }
`

export const HorizontalList = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0px;

    position: absolute;
    right: 5vw;

    li {
        list-style-type: none;

        margin-left: 2vw;
        
        font-size: 1.20rem;
        font-weight: 400;
    }
`

export const LinkStyled = styled(Link)`
    color: black;
    text-decoration: none;
`