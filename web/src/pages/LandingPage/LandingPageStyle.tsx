import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${ (props) => props.theme.colors.primary};

    text-align: center;
    
    width: 100%;
    height: 90vh !important;
`

export const AnimationImage = styled.img`
    border-radius: 20px !important;

    margin-top: 5vh;
    justify-self: center;
`