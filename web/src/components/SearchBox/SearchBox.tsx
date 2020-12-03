import React, {
    InputHTMLAttributes, useEffect, useRef, useState, useCallback,
} from 'react';

import { FaSearch } from 'react-icons/fa';
import IconLupa from '../../assets/images/loupe.svg';

import Image from '../../components/Image/Image'

import { 
    SearchContainer,
    SearchInput,
} from './SearchBoxStyle'
  
interface SearchBoxProps extends InputHTMLAttributes <HTMLInputElement> {}

const SearchBox: React.FC<SearchBoxProps> = ({ ...rest}) => {
    
    const inputRef = useRef<HTMLInputElement>(null);
    const [textSearch, setTextSearch] = useState('')
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);
      
    const changeValue = async (text) => {
        await setTextSearch(text)
    }

    return (
        <div>
            <SearchContainer isFocused={isFocused} isFilled={isFilled} >
                <Image 
                    src={IconLupa}
                    width="30"
                    height="50"
                    margin_left="10px"
                    margin_top="8px"
                />
                <SearchInput
                    text={textSearch}
                    isFocused={isFocused}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    ref={inputRef}
                    value={textSearch}
                    onChange={ (event) => changeValue(event.target.value)}
                    {...rest}
                ></SearchInput>
            </SearchContainer>
        </div>
    )   
}

export default SearchBox;