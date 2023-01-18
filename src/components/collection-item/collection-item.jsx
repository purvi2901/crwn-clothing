import React from 'react'
import './collection-item.scss'
import CustomButton from '../custom-button/customButton-component'
import { addItem } from '../../Redux/cart/cart.actions'
import { connect } from 'react-redux'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    const Click=()=>{
        console.log('clikkc');
        addItem(item);
    }

    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton clickSubmit={Click} inverted>
                Add to cart
            </CustomButton>
        </div>
    )
}

// export default CollectionItem;

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);