import './Bookingform.css';
import Button from '../Button';
import Input from '../Input';
import { useFormik } from 'formik';
import { heroFormSchema } from '../../Schemas';

const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    actions.resetForm()

}

const Bookingform = () => {

    // Formik & Yup for State management
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name2: "",
            email2: "",
            number: "",
            companyname: "",
            message: "",
        },
        validationSchema: heroFormSchema,
        onSubmit,
    });

    
  return (
    <div>
        <form className='sect2form' onSubmit={handleSubmit}>
            <h3>Book a Consultation with us</h3>
            <Input 
                inputclass={'nameinput'} 
                inputType={'name'} 
                inputID={'name2'}
                inputPlaceholder={'Enter your full name'}
                inputValue={values.name2} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur} 
            />
            {errors.name2 && touched.name2 && <p className='error'>{errors.name2}</p>}
            <Input 
                inputclass={'mailinput'} 
                inputType={'email'} 
                inputID={'email2'}
                inputPlaceholder={'Enter your work email'} 
                inputValue={values.email2} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
            />
            {errors.email2 && touched.email2 && <p className='error'>{errors.email2}</p>}
            <Input 
                inputclass={'numinput'} 
                inputType={'number'} 
                inputID={'number'}
                inputPlaceholder={'Mobile number'} 
                inputValue={values.number} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
            />
            {errors.number && touched.number && <p className='error'>{errors.number}</p>}
            <Input 
                inputclass={'companyinput'} 
                inputType={'name'} 
                inputID={'companyname'}
                inputPlaceholder={'Company Name'} 
                inputValue={values.companyname} 
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
            />
            {errors.companyname && touched.companyname && <p className='error'>{errors.companyname}</p>}
            <select name="country"  id='select' > 
                <option defaultValue="" >Select Country</option>
                <option value="nigeria">Nigeria</option>
                <option value="southafrica">South Africa</option>
                <option value="kenya">Kenya</option>
                <option value="russia">Russia</option>
                <option value="sweden">Sweden</option>
                <option value="portugal">Portugal</option>
                <option value="usa">USA</option>
                <option value="china">China</option>
            </select>
            <textarea 
                resize='none'  name="message" placeholder="Drop a message....." 
                rows="5" cols="20" id="message" onChange={handleChange} 
                onBlur={handleBlur} value={values.message}>
            </textarea>
            {errors.message && touched.message && <p className='error'>{errors.message}</p>}
            <Button btnText={'Send Request'} btnClass={'sect2button'} btnDisabled={isSubmitting} />
            {isSubmitting ? <p>Form Submitted</p>: ""}
        </form>
    </div>
  )
}

export default Bookingform