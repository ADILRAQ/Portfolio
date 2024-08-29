import * as React from "react";
import './contact.css';
import { TextField, Stack, Button, Autocomplete } from "@mui/material";

const InputStyle = {
    '& .MuiInputBase-input': {
        color: 'white', // Input text color
        fontFamily: 'monoscope',
        fontSize: '16px'
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)', // Label color (placeholder)
    },
    '& .MuiFilledInput-root': {
        backgroundColor: '#2F2F2F', // Optional: background color for filled variant
    },
}

const Contact = () => {

    return (
        <div className="contact">
            <div className="header dosis-bold">Contact</div>
            <form noValidate >
                <Stack spacing={2}>
                    <TextField variant="filled" label="Name" type="text" autoComplete="false" sx={InputStyle} required />
                    <TextField variant="filled" label="Email" type="email" autoComplete="false" sx={InputStyle} required />
                    <TextField variant="filled" label="Message" multiline rows={2} type="text" autoComplete="false" sx={InputStyle} required />
                    <Button>
                        Send
                    </Button>
                </Stack>
            </form>
        </div>
    );
}

export default Contact;