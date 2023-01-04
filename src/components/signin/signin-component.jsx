import React from 'react';
import './signin-style.scss'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };


    }
    // handleSubmit = event => {
    //     event.preventDefault();

    //     this.setState({ email: '', password: '' });
    // };

    // handleChange = event => {
    //     const { value, name } = event.target;

    //     this.setState({ [name]: value });
    // };
    render() {
        return <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <input
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <input
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                />
            </form>
        </div>
    }
}

export default SignIn;