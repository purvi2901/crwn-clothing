import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Googleauth/Home";
import Login from "./components/Googleauth/Login";
import Signup from "./components/Googleauth/Signup";
import ProtectedRoute from "./components/Googleauth/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


import Header from './components/header/header-component';
import ShopPage from './pages/shoppage/shop-component';
import './pages/homepage/homepage-style.scss';
import HomePage from './pages/homepage/homepage-component';
// import store from "./Redux/store";
import store from "./Redux/root-reducer";

import CheckoutPage from "./pages/checkout/checkout.component";

// import HomePage from './pages/homepage/homepage-component';
// import './pages/homepage/homepage-style.scss';
// import ShopPage from './pages/shoppage/shop-component';
// import Header from './components/header/header-component';
// import SignIn from "./components/signin/signin-component";
// import SigninAndsignup from './pages/signinsignup/signinsignup-component';
let persistor = persistStore(store)

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <Provider store={store}>
        <PersistGate persistor={persistor}>

          <UserAuthContextProvider>
            <Routes>
              {/* <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              /> */}
                <Route exact path="/" element={<Header />} >
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
            </Routes>
          </UserAuthContextProvider>
          </PersistGate>

          </Provider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;





// import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import HomePage from './pages/homepage/homepage-component';
// import './pages/homepage/homepage-style.scss';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ShopPage from './pages/shoppage/shop-component';
// import Header from './components/header/header-component';
// // import SignIn from "./components/signin/signin-component";
// import SigninAndsignup from './pages/signinsignup/signinsignup-component';
// import { auth,createUserProfileDocument } from './firebase/firebase.util';


// // function App()
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       currentUser: null
//     };
//   }

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
//       // this.setState({ currentUser: user });
//       createUserProfileDocument(user);
//       console.log(user);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Routes>
//             <Route exact path="/" element={<Header currentUser={this.state.currentUser} />} >
//               <Route exact path="/" element={<HomePage />} />
//               <Route path="/shop" element={<ShopPage />} />
//               <Route path="/signin" element={<SigninAndsignup />} />
//               {/* <Route exact path="/login" element={<SigninAndsignup />} /> */}
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App;








// /only for email pass firebase
{/* signin-signup with email password */ }

{/* 
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/homepage-component";
import Dashboard from "./components/dashboard";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import { AuthProvider } from "./components/Auth";
import Header from './components/header/header-component';
import ShopPage from './pages/shoppage/shop-component';

import SignIn from "./components/signin/signin-component";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} >
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
};

export default App; */}























{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}