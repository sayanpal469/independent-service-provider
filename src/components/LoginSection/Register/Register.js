import React from 'react';
import signUp from '../../../assets/Sign Up/6333050.jpg'
import './Register.css'
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      
    if(user) {
        navigate('/')
    }
    
    const handelSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='row'>
            <div className='col-lg-6 sign-up-img'>
            <img src={signUp} alt="" />
            </div>
            
      <div className='col-lg-6'>
        <form id='form' onSubmit={handelSubmit} className='w-75 mx-auto mt-5 shadow p-5 h-auto'>
        <h1 className='text-center mb-5 text-primary'>Register</h1>
        
        <div class="mb-3">
        <input  name='name' type="email" class="input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
        </div>


        <div class="mb-3">
        <input  name='email' type="email" class="input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
        </div>

    <div class="mb-3">
    <input name='password' type="password" class="form-control input" id="exampleInputPassword1" placeholder='Password'/>
    </div>

    <div class="mb-3">
    <input name='password' type="password" class="form-control input" id="exampleInputPassword1" placeholder='Confirm Password'/>
    </div>


    <div className='d-flex justify-content-between mb-2'>
    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Please accept <br /> All terms and conditions</label>
    </div>

    <Link id='forgot' to='/login'>Forgot Password?</Link>
    </div>


  <button type="submit" class="btn btn-primary w-100">Register</button>
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