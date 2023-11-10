import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import  { auth} from "../utils/Firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constant';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid, email, displayName} = user;
          dispatch(addUser({
            uid:uid, email:email, displayName:displayName
          }));
          navigate("/browse")
        
          // ...
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });
  }, [])
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between align-middle'>
      <img className="w-44" src={logo} alt=''></img>
    <div className='flex align-middle'>
      <img alt='' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' className='w-10 h-10 mt-5'/>
      <button onClick={handleSignOut} className='font-bold text-white'>Log out</button>
    </div>
    
    
    </div>
  )
}

export default Header