import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
       <Header />
       <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' />
       </div>
       <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white h-3/4 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 ml-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 m-2 w-full bg-gray-700 rounded' ></input>}
        <input type='text' placeholder='Email Address' className='p-4 m-2 w-full bg-gray-700 rounded' ></input>
        <input type='password' placeholder='Password' className='p-4 m-2 w-full bg-gray-700 rounded'></input>
        <button className='p-4 ml-2 mt-2 bg-red-700 w-full text-xl rounded'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 ml-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign in now."}</p>
       </form>
    </div>
  )
}

export default Login;