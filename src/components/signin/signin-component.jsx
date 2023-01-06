import React, { useState } from "react";
import './signin-style.scss'
import FormInput from '../form-input/forrminput-component';
import CustomButton from '../custom-button/customButton-component';
// import { auth } from '../../firebase/firebase.util';
import { signInWithGoogle } from '../../firebase/firebase.util';
import { Link, useNavigate } from "react-router-dom";


class SignIn extends React.Component {

    constructor(prop) {
        super();
        this.state = {
            email: '',
            password: ''
        };
        // console.log( this.state);

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        // console.log(this.state);

    };

    render() {
        return <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' haandleChange={this.handleChange} value={this.state.email} label='email' required />
                <FormInput name='password' type='password' value={this.state.password} haandleChange={this.handleChange} label='password' required />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton clickSubmit={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    }
}

export default SignIn;