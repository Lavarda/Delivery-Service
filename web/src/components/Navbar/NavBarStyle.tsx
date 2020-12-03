import styled from 'styled-components'

import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.yellow} !important;
    height: 8vh;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: relative;
`

export const HorizontalList = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0px;

    position: absolute;
    right: 5vw;

    font-size: 1.20rem;
    font-weight: 400;

    li {
        justify-content: center;
        align-self: center; 

        list-style-type: none;

        margin-left: 3.5vw;
    }

`

export const LinkStyled = styled(Link)`
    color: ${(props) => props.theme.colors.black} !important; 
    text-decoration: none;

    padding-left: 40px !important;
    padding-right: 40px !important;
    padding: 12px;
    border-radius: 25px !important;

    background-color: ${(props) => props.theme.colors.white};

    &:hover {
        color: ${(props) => props.theme.colors.primary} !important; 
    }
`