import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../Redux/cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div> 
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = state => ({
//   // console.log('every time call when state render its nece bcz quantity change everytimr')
//   itemCount: selectCartItemsCount(state)
// });
// const mapStateToProps=()=>{
//   console.log('innnn');
// }

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

//default connect first parameter is null id mapstateto props not exists
//dispatch use to pass action to reducer
//state :current value of each property

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

// export default CartIcon;