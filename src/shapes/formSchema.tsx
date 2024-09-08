import * as yup from 'yup';

// For Conrtacts's form validation
export const formSchema = yup.object().shape({
    name: yup.string().required("Required").trim(),
    email: yup.string().email("Invalid email").required("Required").trim(),
    message: yup.string().required("Required").trim()
});