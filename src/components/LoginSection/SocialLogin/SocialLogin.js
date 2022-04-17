import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import './SocialLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate()

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user) {
        navigate('/')
    }
    
    return (
        <div className='social'>
            <Link onClick={ () => signInWithGoogle()} className='me-2' to='/'>
            <FcGoogle/>
            </Link>

            <Link className='text-dark ms-2' to='/'>
            <AiFillGithub/>
            </Link>
        </div>
    );
};

export default SocialLogin;