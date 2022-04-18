import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import './SocialLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    let errorElement;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    if(loading || loading2) {
        return <Loading/>
    }

    if(error || error2) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message} {error2?.message}</p>
    }

    if(user || user2) {
        navigate('/home')
    }

    return (
        <div className='social'>
            {errorElement}
            <Link onClick={ () => signInWithGoogle()} className='me-2' to='/'>
            <FcGoogle/>
            </Link>

            <Link onClick={ () => signInWithGithub()} className='text-dark ms-2' to='/'>
            <AiFillGithub/>
            </Link>
        </div>
    );
};

export default SocialLogin;