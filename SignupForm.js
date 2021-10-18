import React, { useState, useEffect } from 'react';
import validation from './validation';




const SignupForm = ({ submitForm }) => {
    const [values, setvalues] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setvalues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);




    return (

        <>
            <header>
                < div className="parent"> <h1>Login Form</h1>

                </div>
            </header>
            <div className="container">

                <div className="sideslot">
                    <h1>Contact Information</h1>
                    <br/>
                    <h3><img className="thumbnail"src="./img/contact-form.png" alt="error"/> Fill the form to get in touch</h3>
                    <br/>
                    <h3><img className="thumbnail"src="./img/phone-call.png"alt="error"/> +91 9999999999</h3>
                    
                    <br />
                    <h3><img className="thumbnail"src="./img/gmail.png"alt="error"/> abc@xyz.com</h3>
                    <br />
                    <h3><img className="thumbnail"src="./img/map.png"alt="error"/> Location</h3>
                  
                </div>

                <div className="app-wrapper">
                    <div>
                        <h2 className="title">Create Account</h2>
                    </div>
                    <form className="form-wrapper">
                        <div className="name">
                            <lable className="lable">Full Name</lable>
                            <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                            {errors.fullname && <p className="error">{errors.fullname}</p>}
                        </div>

                        <div className="name">
                            <lable className="lable">Email id</lable>
                            <input className="input" type="text" name="email" value={values.email} onChange={handleChange} />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="name">
                            <lable className="lable">Subject</lable>
                            <input className="input" type="text" name="subject" value={values.subject} onChange={handleChange} />
                            {errors.subject && <p className="error">{errors.subject}</p>}
                        </div>
                        <div className="name">
                            <lable className="lable">Message</lable>
                            <input className="input" type="text" name="message" value={values.message} onChange={handleChange} />
                            {errors.messaage && <p className="error">{errors.message}</p>}

                        </div>
                        <div>
                            <button className="Submit" onClick={handleFormSubmit}>Send</button>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="flex-all-center">
                <p> Copyright &copy; Web Evolution</p>


            </footer>
        </>
    );

};

export default SignupForm
