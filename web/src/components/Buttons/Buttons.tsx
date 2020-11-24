import { Portal } from '@material-ui/core';
import React, { useState, Component } from 'react';

import { ButtonStyledSquare, ButtonStyledRound } from './ButtonsStyle'

const Buttons = (props) => {
    return (
        <div>
            {props.type == 'primary' 
                ? 
                    <ButtonStyledSquare href={props.route} variant={props.variant} color={props.color} size={props.size} disabled={props.disabled}>
                        {props.children}
                    </ButtonStyledSquare>
                :
                    <ButtonStyledRound href={props.route} variant={props.variant} color={props.color} size={props.size} disabled={props.disabled}>
                        {props.children}
                    </ButtonStyledRound>
            }   
        </div>
    );
}

export default Buttons;