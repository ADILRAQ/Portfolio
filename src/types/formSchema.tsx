import * as yup from 'yup';

// For Conrtacts's form validation
export const formSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    message: yup.string().required("Required")
});