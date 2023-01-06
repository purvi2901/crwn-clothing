import React, { Fragment } from 'react';
import Directory from '../../components/directory/directory-component';
import Menuitem from '../../components/menuitems/menuitem-component';
import Header from '../../components/header/header-component';

const HomePage = () => {
  return (
      <div className='homepage'>
         <Directory/>
      </div>
  )
}

export default HomePage







// /only for email pass firebase

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../components/Auth";
// import Directory from '../../components/directory/directory-component';


// const Home = () => {
//   const { currentUser } = useContext(AuthContext);
//   return (
//     <div className='homepage'>
//       {currentUser ? (
//         <p>
//           You are logged - <Link to="/dashboard">View Dashboard</Link>
//         </p>
//       ) : (
//         <p>
//           <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
//         </p>
//       )}
//       <Directory />

//      </div>

//   );
// };

// export default Home;






