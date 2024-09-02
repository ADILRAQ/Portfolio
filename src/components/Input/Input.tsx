import * as React from 'react';
import { TextField } from '@mui/material';
import { InputProps } from '../../types/InputProps';
import { InputStyle } from '../Styling/InputStyle';

const Input = (prop: InputProps) => {

    return (
        <TextField
            id={prop.label.toLowerCase()}
            variant="filled"
            label={prop.label}
            type={prop.label === 'Email' ? "email" : "text"}
            rows={prop.label === 'Message' ? 2 : 1}
            multiline={prop.label === 'Message'}
            sx={InputStyle}
            value={prop.input}
            onChange={prop.handleChange}
            onBlur={prop.handleBlur}
            helperText={(prop.touched && prop.error) || ''}
            error={!!(prop.touched && prop.error)}
        />
    );
};

export default Input;