 import React from 'react';
 import { useNavigate } from 'react-router-dom';
//  import { useHistory } from 'react-router-dom';
import { matchurl } from "react-router";
 import './menuitem-style.scss';

const Menuitem = (props) => {
  // const navigate = useNavigate();
  // const handleClick = () => navigate(`${linkUrl}`);
  // const handleClick = () => navigate({props.linkUrl});
  //  const history = useHistory();
   const navigate = useNavigate();

  const  handleClick=()=> {
    // navigate(`${matchurl}${props.linkUrl}`);
    navigate(`${props.linkUrl}`);
  }


  return (
    <div className={`${props.size} menu-item `} onClick={handleClick}>
    <div className='background-image' style={{backgroundImage:`url(${props.imageUrl})`}} />
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">SHOPNOW</span>
    </div>

  </div>
  )
}

export default Menuitem;