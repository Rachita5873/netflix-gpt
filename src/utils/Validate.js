

export const checkValidateData = (email, password) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /^[A-Za-z -]+$/.test(name);
   
   
    // if(!isNameValid) return "Name is not valid";
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is weak";

    return null;
}