import * as yup from "yup";



export const basicSchema = yup.object().shape({
    name: yup.string().max(20).required("Required") ,
    email: yup.string().email("Please enter a valid email").required("Required")
});



export const heroFormSchema = yup.object().shape({
    name2: yup.string().max(20).required("Required"),
    email2: yup.string().email("Please enter a valid email").required("Required"),
    number: yup.number().integer().required("Required"),
    companyname: yup.string().max(20).required("Required"),
    message: yup.string().min(10).required("Required")
});