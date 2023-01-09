import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
// import firebaseConfig from "../firebase/firebase.util";
import { auth } from "../firebase/firebase.util.js";



const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in.</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;

// /only for email pass firebase