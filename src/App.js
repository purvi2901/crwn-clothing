import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import './pages/homepage/homepage-style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from './pages/shoppage/shop-component';
import Header from './components/header/header-component';


// const HatsPage = (props) => {
//   console.log(props);
//   return (
//     <div>HatsPage</div>
//   )
// }




//add something

function App(props) {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




























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