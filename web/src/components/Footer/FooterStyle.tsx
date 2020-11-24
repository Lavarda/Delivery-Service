import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors['gray-3']};
    /* background-color: transparent; */

    position: absolute;
    bottom: 0;

    width: 100vw;
    height: 5.2vh;
`

export const HrStyled = styled.div`
    width: 70%;
    height: 1px;

    margin-left: 15%;
    margin-right: 15%;

    background-color: ${(props) => props.theme.colors.black};

    margin-bottom: 15px;
`

export const ImageContainer = styled.div`

    margin-right: 20px;

    img {
        max-width: 15vw;
        max-height: 4.5vh;
    }
`

export const ContainerInline = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
`

export const Text = styled.div`
    font-size: 12px;
    font-weight: 500;
`