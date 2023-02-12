import * as yup from "yup";


export const basicSchema = yup.object().shape({
    name: yup.string().max(20).required("Required") ,
    email: yup.string().email("Please enter a valid email").required("Required")
})