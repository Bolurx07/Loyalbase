import './Heroform.css';
import Input from '../Input';
import Button from '../Button';
import { useFormik } from 'formik';
import { basicSchema } from '../../Schemas';
import { HiCheckCircle } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';


const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 15000));
    actions.resetForm()
}


const Heroform = () => {
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    console.log(errors)

  return (
    <form className='heroform' onSubmit={handleSubmit}> 
        <Input inputclass={errors.name && touched.name ? "showerror" : ""} 
                inputType={'name'} 
                inputPlaceholder={'Tell us your name'} 
                inputID={'name'}
                inputValue={values.name} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
            />
        {/* {errors.name && touched.name ? <span className='error-icon'><MdCancel color='red'/></span>  : <span className='error-icon'><HiCheckCircle color='purple'/></span>}   */}
        {errors.name && touched.name && <p className='error'>{errors.name}</p>}
        <Input inputclass={errors.email && touched.email ? "showerror" : ""} 
                inputType={'email'}  
                inputPlaceholder={'Enter your email address'} 
                inputID={'email'} 
                inputValue={values.email} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
        />
        {/* {errors.email && touched.email ? <span className='error-icon'><MdCancel color='red'/></span> : <span className='error-icon'><HiCheckCircle color='purple'/></span>} */}
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}

        <Button btnText={'Get early access'} btnClass={'herobtn'}/>

        <div className={isSubmitting ? "showPopup" : "hidePopup"} >
            <img src="" alt="" />
            <h4>Congratulations</h4>
            <p>
                Great move! You're one step closer to getting 
                your hands on the product. Please check your 
                mail for more information.
            </p>
        </div>
    </form>
  )
}

export default Heroform