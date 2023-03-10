import React from 'react';
//  import { useHistory } from 'react-router-dom';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item,idx)=>idx<4)
                .map(item=>(
                    <CollectionItem  key={item.id} item={item} />
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