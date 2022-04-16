import React from 'react';
import googleLogo from '../../../images/Social/google.png';
import githubLogo from '../../../images/Social/github.png';
import facebookLogo from '../../../images/Social/facebook.png';
import './SocialLogin.css';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

    if(user || user1 || user2){
        navigate('/')
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook();
    }

    return (
        <div className='w-50 mx-auto'>
            <h5 className='text-dark text-center'>Sign In with</h5>
            <div className="d-flex justify-content-center align-items-center gap-5">
            <div onClick={handleGoogleSignIn} className='bg-info my-2 text-center p-1'>
                <img src={googleLogo} alt="" />
            </div>
            <div onClick={handleFacebookSignIn} id='fb-div' className='bg-primary my-2 text-white p-1 text-center rounded-3'>
                <img src={facebookLogo} alt="" />
            </div>
            <div onClick={handleGithubSignIn} className='bg-info px-3 py-1 text-center rounded-3'>
                <img src={githubLogo} alt="" />
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;