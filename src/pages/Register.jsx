import React from 'react';
import avatar from '../images/images.png'

const RegisterPage = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Kasi Chat</span>
        <span className="title">Register</span>
        <form>
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
