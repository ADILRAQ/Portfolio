import * as React from "react";
import './contact.css';
import { Stack, Button} from "@mui/material";
import Input from "../components/Input/Input";

const Contact = () => {

    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');

    React.useEffect(() => {
        console.log('Name:', name);
        console.log('email:', email);
        console.log('message:', message);
    }, [name, email, message]);

    return (
        <div className="contact">
            <div className="header dosis-bold">Contact</div>
            <form>
                <Stack spacing={2}>
                    <Input label="Name" variable={name} setvariable={setName} />
                    <Input label="Email" variable={email} setvariable={setEmail} />
                    <Input label="Message" variable={message} setvariable={setMessage} />
                    <Button type="submit">
                        Send
                    </Button>
                </Stack>
            </form>
        </div>
    );
}

export default Contact;