import { TextField } from '@mui/material';
import * as React from 'react';

const InputStyle = {
    '& .MuiInputBase-input': {
        color: 'white', // Input text color
        fontFamily: 'sans-serif',
        fontSize: '15px'
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)', // Label color (placeholder)
    },
    '& .MuiFilledInput-root': {
        backgroundColor: '#2F2F2F', // Optional: background color for filled variant
    },
}

const Input = (prop: {label: string, variable: string, setvariable: React.Dispatch<React.SetStateAction<string>>}) => {

    const handleOnChange = (data :React.ChangeEvent<HTMLInputElement>) => {
        prop.setvariable(data.target.value);
    }

    return (
        <TextField
            variant="filled"
            label={prop.label}
            type="text"
            autoComplete="off"
            sx={InputStyle}
            value={prop.variable}
            onChange={handleOnChange}
            required
        />
    );
};

export default Input;