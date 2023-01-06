import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import { auth } from "../firebase/firebase.util.js";
import FormInput from "./form-input/forrminput-component.jsx";
import CustomButton from "./custom-button/customButton-component.jsx";


const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
        auth.signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" placeholder="Email" />
        <FormInput type="password" name="password" placeholder="Password" />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </>
  );
};

export default LogIn;