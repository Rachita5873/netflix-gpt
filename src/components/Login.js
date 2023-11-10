import React from 'react'
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidateData } from '../utils/Validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/Firebase"


const Login = () => {
  

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const name = useRef(null);


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const valEmail = (event) => {
     setEmail(event.target.value);
  }
  
  const valPassword = (event) => {
    setPassword(event.target.value);
 }
  const handleButtonClick = () => {

    //validation
    // const nameValue = name.current ? name.current.value : '';

     const message=checkValidateData(Email, Password);
    
      setErrorMsg(message);
     

     //sign in / sign up

     if(!isSignInForm){
      createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
        // ..
      });
     }

     else{
      signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
      });
     }
    
  }


  return (
    <div>
       <Header />
       <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' />
       </div>
       <form onSubmit={(e)=>{e.preventDefault()}}className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white h-3/4 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 ml-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 m-2 w-full bg-gray-700 rounded' />}
        <input type='text' placeholder='Email Address' className='p-4 m-2 w-full bg-gray-700 rounded' value={Email} onChange={valEmail} ></input>
        <input type='password' placeholder='Password' className='p-4 m-2 w-full bg-gray-700 rounded' value={Password} onChange={valPassword}></input>
        <p className='ml-2 text-red-500'>{errorMsg}</p>
        <button className='p-4 ml-2 mt-2 bg-red-700 w-full text-xl rounded' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 ml-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign in now."}</p>
       </form>
    </div>
  )
}

export default Login;