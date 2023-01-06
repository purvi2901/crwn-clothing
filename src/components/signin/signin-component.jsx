// import React, { useState } from "react";
// import './signin-style.scss'
// import FormInput from '../form-input/forrminput-component';
// import CustomButton from '../custom-button/customButton-component';
// // import { signInWithGoogle } from '../../firebase/firebase.util';
// // import { AuthProvider } from '../../firebase/authcontext';
// // import { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// import { auth } from '../../firebase/firebase.util';
// import { Link, useNavigate } from "react-router-dom";

// function Signup() {
//     const navigate = useNavigate();
//     const [values, setValues] = useState({
//         name: "",
//         email: "",
//         pass: "",
//     });
//     const [errorMsg, setErrorMsg] = useState("");
//     const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//     const handleSubmission = () => {
//         if (!values.name || !values.email || !values.pass) {
//             setErrorMsg("Fill all fields");
//             return;
//         }
//         setErrorMsg("");

//         setSubmitButtonDisabled(true);
//         createUserWithEmailAndPassword(auth, values.email, values.pass)
//             .then(async (res) => {
//                 setSubmitButtonDisabled(false);
//                 const user = res.user;
//                 await updateProfile(user, {
//                     displayName: values.name,
//                 });
//                 navigate("/");
//             })
//             .catch((err) => {
//                 setSubmitButtonDisabled(false);
//                 setErrorMsg(err.message);
//             });
//     };
//     // handleChange = event => {
//     //     const { value, name } = event.target;
//     //     this.setState({ [name]: value });
//     //     console.log(this.state);

//     // };
//     return (
//         <div className={styles.container}>
//             <div className={styles.innerBox}>
//                 <h1 className={styles.heading}>Signup</h1>
//                 <FormInput
//                     label="Name"
//                     placeholder="Enter your name"
//                     onChange={(event) =>
//                         setValues((prev) => ({ ...prev, name: event.target.value }))
//                     }
//                 />
//                 <FormInput
//                     label="Email"
//                     placeholder="Enter email address"
//                     onChange={(event) =>
//                         setValues((prev) => ({ ...prev, email: event.target.value }))
//                     }
//                 />
//                 <FormInput
//                     label="Password"
//                     placeholder="Enter password"
//                     onChange={(event) =>
//                         setValues((prev) => ({ ...prev, pass: event.target.value }))
//                     }
//                 />

//                 <div className={styles.footer}>
//                     <b className={styles.error}>{errorMsg}</b>
//                     <button onClick={handleSubmission} disabled={submitButtonDisabled}>
//                         Signup
//                     </button>
//                     <p>
//                         Already have an account?{" "}
//                         <span>
//                             <Link to="/login">Login</Link>
//                         </span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Signup;
// class SignIn extends React.Component {

//     constructor(prop) {
//         super();
//         this.state = {
//             email: '',
//             password: ''
//         };
//         // console.log( this.state);

//     }
//     handleSubmit = event => {
//         event.preventDefault();
//         this.setState({ email: '', password: '' });
//     };

//     handleChange = event => {
//         const { value, name } = event.target;
//         this.setState({ [name]: value });
//         console.log(this.state);

//     };
//     render() {
//         return <div className='sign-in'>
//             <h2>I already have an account</h2>
//             <span>Sign in with your email and password</span>

//             <form onSubmit={this.handleSubmit}>
//                 <FormInput name='email' type='email' haandleChange={this.handleChange} value={this.state.email} label='email' required />
//                 <FormInput name='password' type='password' value={this.state.password} haandleChange={this.handleChange} label='password' required />
//                 {/* <CustomButton type="submit" value="submit">Signin</CustomButton> */}
//                 <CustomButton onClick={signInWithGoogle} value="submit">SigninWith Google</CustomButton>
//             </form>
//         </div>
//     }
// }

// export default SignIn;