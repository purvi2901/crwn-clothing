import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/customButton-component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../Redux/cart/cart.selectors';
import { toggleCartHidden } from '../../Redux/cart/cart.actions.js';
import { useNavigate } from "react-router-dom"
import './cart-dropdown.styles.scss';
// import { withRouter } from 'react-router-dom';



// const CheckoutNav=()=>{
//   navigate('/');
// };


const CartDropdown = ({ cartItems , dispatch}) => {
  const navigate = useNavigate();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        ) : (
          <span className='empty-message'>your cart is empty</span>
        )
        }
      </div>
      <CustomButton clickSubmit={() =>{
       navigate('/checkout');
       dispatch(toggleCartHidden());
      }

       }>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
};


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });
// export default withRouter(connect(mapStateToProps)(CartDropdown));


export default connect(mapStateToProps)(CartDropdown);
// export default CartDropdown;