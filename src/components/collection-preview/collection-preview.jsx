import React from 'react';
//  import { useHistory } from 'react-router-dom';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = (props) => {
  return (
    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {
                props.items
                .filter((item,idx)=>idx<4)
                .map(({id,...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
  )
}

export default CollectionPreview




// {
//     props.items
//     .filter((item,idx)=>idx<4)
//     .map(item=>(
//         <div key={item.id}>{item.name}</div>
//     ))
// }