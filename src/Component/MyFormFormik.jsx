import React from 'react'
import { useFormik } from 'formik'
import { validate } from '../schemas'

const initialValues = {
    name: "",
    email: "",
    password: "",
    c_password: "",
    gender: false
}

function MyForm() {
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validate,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })
    return (
        <>
            <h2>User Registraction Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='inputName' className="input-label col-sm-1 col-form-label">Name:</label>
                <input type='text'
                    name='name'
                    placeholder='Enter your name'
                    id="inputName"
                    value={values.name}
                    onChange={handleChange} />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}

                <br />
                <label htmlFor='inputEmail' className="input-label col-sm-1 col-form-label">Email:</label>
                <input type='text'
                    name='email'
                    placeholder='Enter your Email'
                    id="inputEmail"
                    value={values.email}
                    onChange={handleChange} />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                <br />

                <label htmlFor='inputPassword' className="input-label col-sm-1 col-form-label">Password:</label>
                <input type='text'
                    name='password'
                    placeholder='Enter your Password'
                    id="inputPassword"
                    value={values.password}
                    onChange={handleChange} />
                {errors.password && touched.password ? <p>{errors.password}</p> : null}
                <br />

                <label htmlFor='inputc_password' className="input-label col-sm-1 col-form-label">Re-Enter Password:</label>
                <input type='text'
                    name='c_password'
                    placeholder='Re-Enter your Password'
                    id="inputc_password"
                    value={values.c_password}
                    onChange={handleChange} />
                {errors.c_password && touched.c_password ? <p>{errors.c_password}</p> : null}
                <br />
                <label htmlFor='inputGender'>Gender</label>
                <input type='radio' name='gender' value={values.gender} onChange={handleChange} />
                <br />
                <button name='btn' type='Submit' id='submit' > SUBMIT </button>
            </form>
        </>
    )
}

export default MyForm