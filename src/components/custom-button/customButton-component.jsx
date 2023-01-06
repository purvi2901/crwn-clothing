import React from 'react';
import './customButton-style.scss';

const CustomButton = ({children,otherbtnprops}) => {
  return (
    <button className="custom-button" {...otherbtnprops} >
        {children}
    </button>
  )
}

export default CustomButton;