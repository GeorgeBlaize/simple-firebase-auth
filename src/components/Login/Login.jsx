
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';


const Login = () => {

    const [user,setUser] =useState(null)
    
    const provider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () =>{
        console.log('google sign in clicked');

        signInWithPopup(auth,provider).then(result => {
            console.log(result)
            setUser(result.user);
        }).catch(error =>{
            console.log(error);
        })

       
    }

    const handleSignOut = () =>{
        signOut(auth).then(() =>{
            console.log("signout completed");
            setUser(null)
        }).catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ? 
                <button onClick={handleSignOut}>Sign Out</button> : 
                <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            }

            {   
                user && 
                <div>
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;