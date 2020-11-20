import { Portal } from '@material-ui/core';
import React, { useState, Component } from 'react';

import { ButtonStyled } from './ButtonsStyle'

const Buttons = (props) => {
    return (
        <ButtonStyled href={props.route} variant={props.variant} color={props.color} size={props.size} disabled={props.disabled}>
            {props.children}
        </ButtonStyled>
    );
}

export default Buttons;