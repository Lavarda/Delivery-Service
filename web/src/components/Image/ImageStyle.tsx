import styled, {css} from 'styled-components'

interface ImageStyledProps {
    margin_top: String;
    margin_bottom: String;
    margin_left: String;
    margin_right: String;
}

export const Container = styled.div`

`

export const ImageStyled = styled.img<ImageStyledProps>`
    margin-top: ${(props) => !!props.margin_top ? 'props.margin_top' : 'none'};
    /* margin-bottom
    margin-left
    margin-right */
`