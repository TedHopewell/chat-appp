import React from 'react';
import avatar from '../images/images.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from 'firebase/auth';

const RegisterPage = () => {
  const [err,setErr] = React.useState(false);
  const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].value;

      try{
        const res = await createUserWithEmailAndPassword(auth,email, password);
      }catch(err){
        setErr(true);
      }
  };
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='display name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input style={{display:"none"}} type='file' id='file' />
            <label htmlFor="file">
                <img src={avatar} alt="" />
                <span>Add an Avatar</span>
            </label>
            <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p> 
      </div>
    </div>
  );
}

export default RegisterPage;
