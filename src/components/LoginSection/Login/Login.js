import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import login from '../../../assets/Log In/4957136.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/' ;

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


      if(user) {
        navigate(from, {replace: true})
      }

      if(loading || sending) {
        return <Loading/>
    }
    
      if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

      const handelSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
      const email = emailRef.current.value
      if (email) {
        await sendPasswordResetEmail(email);
        toast("Sent email");
       }
        else{
        toast("Please enter your email address");
      }
      }

    return (

        <div className='row'>
        <div className='col-lg-6 sign-up-img'>
        <img src={login} alt="" />
        </div>
        
  <div className='col-lg-6'>
    <form onSubmit={handelSubmit} id='form'  className='w-75 mx-auto mt-5 shadow p-5 h-auto'>
    <h1 className='text-center mb-5 text-primary'>Log In</h1>
    
    <div className="mb-3">
    <input ref={emailRef}  name='email' type="email" className="input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
    </div>

<div className="mb-3">
<input ref={passwordRef} name='password' type="password" className="form-control input" id="exampleInputPassword1" placeholder='Password'/>
</div>


<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Forgot Password?</button> 

<p className='text-center mb-3'>{errorElement}</p>

<button type="submit" className="btn btn-primary w-100">Login</button>
<p className='text-center mt-2'>Don't have any account? <Link to='/register' className='text-primary'>Create New Account</Link> </p>
<div className='or-area mt-3'>
<div className='dag'></div>
<p className='mt-2'>Or</p>
<div className='dag'></div>
</div>
<SocialLogin/>
</form>
</div>
<ToastContainer></ToastContainer>

</div>
    );
};

export default Login;