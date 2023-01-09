
import React, { useState } from "react";
import { ReactDOM } from "react";
import { Navigate } from "react-router-dom";
// import firebaseConfig from "../firebase/firebase.util";
import { auth } from "../firebase/firebase.util.js";
import FormInput from "./form-input/forrminput-component.jsx";
import CustomButton from "./custom-button/customButton-component.jsx";
import "./Auth-style.scss";


const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    // console.log(email.value);
    try {
        auth.createUserWithEmailAndPassword(email.value, password.value);
        setCurrentUser(true);
    } catch (error) {
        alert(error);
    }
};

if (currentUser) {
    return <Navigate to="/dashboard" />;
}
return (
    <div className='sign-in'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />
            <CustomButton type="submit">Submit</CustomButton>
        </form>
    </div>
);
};

export default SignUp;





// /only for email pass firebase












{/* <FormInput type="email" name="email" haandleChange={onChangeHandler} value={setemail} label="email" placeholder="Email" /> */}














{/* <form onSubmit={handleSubmit}>
    <label >Email</label>
    <input type="email" name="email" placeholder="Email" />
    <label >Password</label>
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Submit</button>
</form> */}