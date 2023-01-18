import React from 'react';
import './customButton-style.scss';

const CustomButton = ({ children, clickSubmit ,inverted ,isGoogleSignIn, otherbtnprops }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={clickSubmit}
      {...otherbtnprops}
    >
      {children}
    </button>
  )
}

export default CustomButton;