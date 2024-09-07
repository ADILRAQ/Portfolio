import * as React from "react";
import './contact.css';
import { Stack, Button } from "@mui/material";
import Input from "../components/Input/Input";
import { useFormik } from "formik";
import SendIcon from "../components/SendIcon/SendIcon";
import { FormAttributes } from "../types/FormAttributes";
import { formSchema } from "../types/formSchema";
import { ButtonStyle } from "../components/Styling/ButtonStyle";

const Contact = () => {

    const onSubmit = (values :FormAttributes) => {
        // TODO: Submit data to my email
        console.log("Submit:", values);
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<FormAttributes>({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: formSchema,
        onSubmit,
    });

    return (
        <div className="contact component">
            <div className="header dosis-bold">Contact</div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <Input
                        label="Name"
                        input={values.name}
                        error={errors.name}
                        touched={touched.name}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                    <Input
                        label="Email"
                        input={values.email}
                        error={errors.email}
                        touched={touched.email}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                    <Input
                        label="Message"
                        input={values.message}
                        error={errors.message}
                        touched={touched.message}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        startIcon={<SendIcon />}
                        sx={ButtonStyle}
                    >
                        Send
                    </Button>
                </Stack>
            </form>
        </div>
    );
}

export default Contact;