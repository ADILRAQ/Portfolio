import * as React from "react";
import './contact.css';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';

import { TextField, Stack, Button } from "@mui/material";

const Contact = () => {

    return (
        <div className="contact">
            <div className="header dosis-bold">Contact</div>
            <form noValidate style={{background:'red'}}>
                {/* <Stack spacing={2} width={10} height={100}> */}
                    <TextField label="Name" type="text" size="medium" style={{background:'white'}}/>
                    <TextField label="Email" type="email" />
                    <TextField label="Message" type="text" />
                    <Button>
                        Send
                    </Button>
                {/* </Stack> */}

            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <label className="text dosis-light">Name</label>
                <input type="text" name="name" id="name" />
                <label className="text dosis-light">Email</label>
                <input type="text" name="email" id="email" />
                <label className="text dosis-light">Message</label>
                <input type="text" name="message" id="message" />
                <input type="submit" /> */}
            </form>
        </div>
    );
}

export default Contact;