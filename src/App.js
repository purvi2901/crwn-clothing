import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/homepage-component";
import Dashboard from "./components/dashboard";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import { AuthProvider } from "./components/Auth";
import Header from './components/header/header-component';
import ShopPage from './pages/shoppage/shop-component';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} >
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
};

export default App;





// import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import { useState } from "react";
// import HomePage from './pages/homepage/homepage-component';
// import './pages/homepage/homepage-style.scss';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ShopPage from './pages/shoppage/shop-component';
// import Header from './components/header/header-component';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<Header />} >
//             <Route exact path="/" element={<HomePage />} />
//             <Route path="/shop" element={<ShopPage />} />
//             {/* <AuthProvider> */}
//             {/* <Route path="/signin" element={<SigninAndsignup />} /> */}
//             {/* <Route exact path="/register" element={<Register />} /> */}
//             {/* <Route exact path="/login" element={<SigninAndsignup />} /> */}
//             {/* </AuthProvider> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;




























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