import styled, { css }  from 'styled-components'

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

interface SearchInput {
    isFocused: boolean;
    text: String;
}

export const SearchContainer = styled.div<ContainerProps>`
    background-color: ${(props) => props.theme.colors.white};

    width: 40vw;
    height: 4.5vh;
    margin-top: 5vh;
    margin-left: 30vw;
    position: absolute;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    /* ${(props) => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${(props) => props.isFilled && css`
        color: #ff9000;
    `} */
`

export const SearchInput = styled.input<SearchInput>`
    width: 90%;

    border: none;
    text-align: ${ (props) => props.text.length >= 1 ? 'left' : 'center'};

    ${ (props) => props.isFocused && css`
            outline: none;
    `}
    
`