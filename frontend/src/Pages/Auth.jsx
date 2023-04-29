import React from 'react';
import "../Style/AuthStyle.css";
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <>
            <div className='authNav'>
                <Link className='navLink' to={"/"}>Home</Link>
            </div>
            <center className='center'>
                <form className='loginForm'>
                <h1 className='loginHeading'>Login</h1>
                    <input className='loginInput' placeholder='Username' type='text' />
                    <input className='loginInput' placeholder='Password' type='password' />
                    <button className='loginBtn btn' type='submit'>Submit</button>
                </form>
                <form className='signUpForm'>
                <h1 className='signUpHeading'>Create An Account</h1>
                    <input className='signUpInput' placeholder='Username' type='text' />
                    <input className='signUpInput' placeholder='Email' type='text' />
                    <input className='signUpInput' placeholder='Password' type='password' />
                    <button className='signUpBtn btn' type='submit'>Sign Up</button>
                </form>
            </center>

        </>
    )
}

export default Auth