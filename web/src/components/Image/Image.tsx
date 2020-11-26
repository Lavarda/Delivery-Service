import React, {
    ImgHTMLAttributes, useEffect, useRef, useState, useCallback,
} from 'react';

import {
    Container,
    ImageStyled,
} from './ImageStyle'
  
interface ImageProps extends ImgHTMLAttributes <HTMLImageElement> {
    margin_top?: any;
    margin_bottom?: any;
    margin_left?: any;
    margin_right?: any;
    border_radius?: any;
}

const Image: React.FC<ImageProps> = ({ margin_right, margin_left, margin_top, margin_bottom, border_radius, ...rest}) => {

    console.log('Rest', rest, margin_top)

    return (
        <Container>
            <ImageStyled 
                margin_right={margin_right}
                margin_left={margin_left}
                margin_top={margin_top}
                margin_bottom={margin_bottom}
                border_radius={border_radius}
                {...rest}
            />
        </Container>
    )
}

export default Image;