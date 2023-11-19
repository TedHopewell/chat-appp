import React from 'react';
import avatar from '../images/images.png'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { auth, storage } from '../firebase';
import { getStorage,
        ref,
        uploadBytesResumable,
        getDownloadURL, } 
        from 'firebase/storage';
import { doc, setDoc} from "firebase/firestore"
import { db } from '../firebase';

const RegisterPage = () => {
  const [err,setErr] = React.useState(false);
  const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
      console.log(e.target[0].value)
      const auth = getAuth();
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredentials) =>{
        const user = userCredentials.user;
      })

      try{
        const res = await createUserWithEmailAndPassword(auth,email, password);
        const storageRef = ref(storage, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file)

        
// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
  'state_changed', 

(error) => {
  setErr(true)
}, 
() => {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
    await updateProfile(res.user,{
      displayName,
      photoURL:downloadURL,
    });
    await setDoc(doc(db, "users", res.user.uid),{
      uid: res.user.uid,
      displayName,
      email,
      photoURL:downloadURL,
  });
  });
}
);

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
            {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>Already have an account? Login</p> 
      </div>
    </div>
  );
}

export default RegisterPage;
