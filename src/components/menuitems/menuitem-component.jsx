 import React from 'react';
import { matchPath } from 'react-router-dom';
 import './menuitem-style.scss';

const Menuitem = (props) => {
  return (
    <div className={`${props.size} menu-item `} onClick={()=>history.push(`${matchRoutes}${linkUrl}`)}>
    <div className='background-image' style={{backgroundImage:`url(${props.imageUrl})`}} />
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">SHOPNOW</span>
    </div>

  </div>
  )
}

export default Menuitem;