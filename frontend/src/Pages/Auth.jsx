import React from 'react';
import "../Style/AuthStyle.css";
import { Link } from 'react-router-dom';
import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPwd, setLoginPwd] = React.useState("");

    const login = async (e) => {
        e.preventDefault();
        const verifyUser = signInWithEmailAndPassword(auth, loginEmail, loginPwd);
        try {
            await console.log(verifyUser);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    const [signUpValue, setSignUpValue] = React.useState({
        signUpUsername: "",
        signUpEmail: "",
        signUpPwd: ""
    })

    const signUp = async (e) => {
        e.preventDefault();
        const createUser = createUserWithEmailAndPassword(auth, signUpValue.signUpEmail, signUpValue.signUpPwd);
        console.log(signUpValue);
        setSignUpValue({});

        try {
            await console.log(createUser);
            const user = (await createUser).user;
            updateProfile(user, {
                displayName: signUpValue.signUpUsername
            });
            // console.log(user);
            window.location.reload(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='authNav'>
                <Link className='navLink' to={"/"}>Home</Link>
            </div>
            <center className='center'>
                <form className='loginForm' onSubmit={login}>
                    <h1 className='loginHeading'>Login</h1>
                    <input className='loginInput' placeholder='Username' type='text' name='username' value={loginEmail} onChange={(e) => { setLoginEmail(e.target.value) }} />
                    <input className='loginInput' placeholder='Password' type='password' name='pwd' value={loginPwd} onChange={(e) => { setLoginPwd(e.target.value) }} />
                    <button className='loginBtn btn' type='submit'>Submit</button>
                </form>
                <form className='signUpForm' onSubmit={signUp}>
                    <h1 className='signUpHeading'>Create An Account</h1>
                    <input className='signUpInput' placeholder='Username' type='text' name='' value={signUpValue.signUpUsername} onChange={(e) => { setSignUpValue(prev => ({ ...prev, signUpUsername: e.target.value })) }} />
                    <input className='signUpInput' placeholder='Email' type='text' name='' value={signUpValue.signUpEmail} onChange={(e) => { setSignUpValue((prev) => ({ ...prev, signUpEmail: e.target.value })) }} />
                    <input className='signUpInput' placeholder='Password' type='password' name='' value={signUpValue.signUpPwd} onChange={(e) => { setSignUpValue((prev) => ({ ...prev, signUpPwd: e.target.value })) }} />
                    <button className='signUpBtn btn' type='submit'>Sign Up</button>
                </form>
            </center>

        </>
    )
}

export default Auth