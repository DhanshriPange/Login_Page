
const validation = (values) => {
    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required."
    }
    if(!values.email){
        errors.email="Email is required."
    }
    else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email="Email is Invalid."
    }
    if(!values.subject){
        errors.password="Subject is required."
    }
    if(!values.message){
        errors.password="Message is required."
    }
    else if(values.message.length<20)
    {
        errors.message="Messagenot more than 20 characters"
    }
    return errors;
        

};

export default validation;
