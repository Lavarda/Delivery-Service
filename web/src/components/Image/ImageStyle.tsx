import styled, {css} from 'styled-components'

interface ImageStyledProps {
    margin_top: any;
    margin_bottom: any;
    margin_left: any;
    margin_right: any;
    border_radius: any;
}

export const Container = styled.div`

`

export const ImageStyled = styled.img<ImageStyledProps>`
    margin-top: ${(props) => props.margin_top };
    margin-bottom: ${(props) => props.margin_bottom };
    margin-right: ${(props) => props.margin_right };
    margin-left: ${(props) => props.margin_left };
    border-radius: ${ (props) => props.border_radius};
`