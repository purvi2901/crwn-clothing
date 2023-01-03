 import React from 'react';
 import './menuitem-style.scss';

const Menuitem = (props) => {
  return (
    <div className={`${props.size} menu-item `}>
    <div className='background-image' style={{backgroundImage:`url(${props.image})`}} />
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">SHOPNOW</span>
    </div>

  </div>
  )
}

export default Menuitem