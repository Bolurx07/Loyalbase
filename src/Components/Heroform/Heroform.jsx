import './Heroform.css';
import Input from '../Input';
import Button from '../Button';
import { useFormik } from 'formik';
import { basicSchema } from '../../Schemas';
import { useState, useEffect } from 'react';
import MyVerticallyCenteredModal from '../PopUp/PopUp';


const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 7000));
    actions.resetForm()

}


const Heroform = () => {

    // Formik & Yup for State management
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    
    
    // State and UseEffect to fire Modal Pop-up message after form submission
    const [modalShow, setModalShow] = useState(false);

    useEffect( () => {
        if (isSubmitting === true) {
            return setModalShow(true)  
        } else{
            return setModalShow(false)
        }

    },[isSubmitting]
    );
         


  return (
    <form className='heroform' onSubmit={handleSubmit}> 
        <Input  
                inputType={'name'} 
                inputPlaceholder={'Tell us your name'} 
                inputID={'name'}
                inputValue={values.name} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
            />
        {errors.name && touched.name && <p className='error'>{errors.name}</p>}
        <Input  
                inputType={'email'}  
                inputPlaceholder={'Enter your email address'} 
                inputID={'email'} 
                inputValue={values.email} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
        />
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}

        <Button btnText={'Get early access'} btnClass={'herobtn'} />
        <div>
            <MyVerticallyCenteredModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    </form>
  )
}

export default Heroform