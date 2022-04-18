import React, { useState } from 'react';
import signUp from '../../../assets/Sign Up/6333050.jpg'
import './Register.css'
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../SharedPages/Loading/Loading';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   
    const handelConfirmPasswordBlur = (e) => {
      setConfirmPassword(e.target.value)
  }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      

      if(loading) {
         return <Loading/>
      }

      if(user) {
        navigate('/home')
      }
    
    const handelRegister = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

      if(password < 6) {
        setError('minimum 6 charecter')
      }

      if(password !== confirmPassword) {
          setError('Password did not match')
          return
      }

      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name })
      navigate('/home')
    }

    return (
        <div className='row mb-5'>
            <div className='col-lg-6 sign-up-img'>
            <img src={signUp} alt="" />
            </div>
            
      <div className='col-lg-6'>
        <form id='form' onSubmit={handelRegister} className='w-75 mx-auto mt-5 shadow p-5 h-auto'>
        <h1 className='text-center mb-5 text-primary'>Register</h1>
        
        <div className="mb-3">
        <input  name='name' type="text" className="input form-control" placeholder='Name'/>
        </div>


        <div className="mb-3">
        <input  name='email' type="email" className="input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
        </div>

    <div className="mb-3">
    <input name='password' type="password" className="form-control input" id="exampleInputPassword1" placeholder='Password'/>
    </div>

    <div className="mb-3">
    <input onBlur={handelConfirmPasswordBlur} name='confirmPassword' type="password" className="form-control input" id="exampleInputPassword1" placeholder='Confirm Password'/>
    </div>


    

<p className='text-danger text-center'>{error}</p>

  <button type="submit" className="btn btn-primary w-100">Register</button>
  <p className='text-center mt-2'>Already have an account? <Link to='/login' className='text-primary'>LogIn</Link> </p>
  <div className='or-area mt-3'>
    <div className='dag'></div>
    <p className='mt-2'>Or</p>
    <div className='dag'></div>
  </div>

  <SocialLogin/>
</form>
</div>
</div>
    );
};

export default Register;