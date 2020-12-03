import React from 'react';

import { 
    Container,
    Title,
    Description,
} from './CardStyle'

import Image from '../Image/Image'

interface CardProps {
    img?: any;
    background_image?: any;
    width?: any;
    title?: any;
    description?: any;
    radius?: any;
}

const Card: React.FC<CardProps> = ({ img, background_image, width, title, description, radius }) => {
    return (
        <Container background_image={background_image} radius={radius}>
            { !!img && (
                <Image 
                    src={img}
                    width={width}
                />
            )}
            { !!title && (
                <Title radius={radius}>
                    {title}
                </Title>
            )}
            { !!description && (
                <Description>
                    {description}
                </Description>
            )}
        </Container>
    )
}   

export default Card;