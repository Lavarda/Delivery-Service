import React, {
    ImgHTMLAttributes, useEffect, useRef, useState, useCallback,
} from 'react';

import {
    Container,
    ImageStyled,
} from './ImageStyle'
  
interface ImageProps extends ImgHTMLAttributes <HTMLImageElement> {
    margin_top: String;
    margin_bottom: String;
    margin_left: String;
    margin_right: String;
}

const Image: React.FC<ImageProps> = (props, { ...rest}) => {
    return (
        <Container>
            <ImageStyled 
                margin_right={props.margin_right}
                margin_left={props.margin_left}
                margin_top={props.margin_top}
                margin_bottom={props.margin_bottom}
                {...rest}
            />
        </Container>
    )
}

export default Image;