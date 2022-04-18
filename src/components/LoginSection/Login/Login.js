import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import login from '../../../assets/Log In/4957136.jpg'

const Login = () => {
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/' 

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);

      if(loading) {
          return <Loading/>
      }

      if(user) {
        navigate(from, {replace: true})
    }

      const handelSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(email, password)
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
    <input  name='email' type="email" className="input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
    </div>

<div className="mb-3">
<input name='password' type="password" className="form-control input" id="exampleInputPassword1" placeholder='Password'/>
</div>

<div className="mb-3">
<input name='confirmPassword' type="password" className="form-control input" id="exampleInputPassword1" placeholder='Confirm Password'/>
</div>


<div className='d-flex justify-content-between mb-2'>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" for="exampleCheck1">Please accept <br /> All terms and conditions</label>
</div>

<Link id='forgot' to='/login'>Forgot Password?</Link>
</div>

<p className='text-danger text-center'>{error?.message}</p>

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
</div>
    );
};

export default Login;