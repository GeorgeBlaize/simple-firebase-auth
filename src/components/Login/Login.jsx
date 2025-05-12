import React from 'react';

const Login = () => {

    const handleGoogleSignIn = () =>{
        console.log('google sign in clicked')
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;