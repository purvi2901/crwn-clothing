import React from 'react';
import './customButton-style.scss';

const CustomButton = ({ children, clickSubmit ,isGoogleSignIn, otherbtnprops }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={clickSubmit}
      {...otherbtnprops}
    >
      {children}
    </button>
  )
}

export default CustomButton;