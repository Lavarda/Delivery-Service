import styled, {css} from 'styled-components';

interface CardProps {
    img?: any;
    title?: any;
    description?: any;
    radius?: any;
    background_image?: any;
}

interface TitleProps {
    radius?: any;
}

export const Container = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    height: 25vh;
    width: 20vw;

    background-image: url(${(props) => props.background_image});
    border-radius: ${(props) => props.radius};
    background-size: cover;
`

export const Title = styled.div<TitleProps>`
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.radius };
  
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 8px;

    padding-bottom: 0px !important;
    margin-bottom: 0px !important;
`

export const Description = styled.div`
`