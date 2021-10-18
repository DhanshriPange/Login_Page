import React,{useState} from 'react'
import SignupForm from "./SignupForm";
import SignupFormSucess from "./SignupFormSuccess";

const Form = () => {
  const[formIsSubmitted,setFormIsSubmitted]=useState(false);
  const submitForm=()=> {
    setFormIsSubmitted(true);
  };
  return (
  <div> 
   {!formIsSubmitted?<SignupForm submitForm={submitForm}/>:<SignupFormSucess/>}
  </div>
  );
  
};

export default Form
