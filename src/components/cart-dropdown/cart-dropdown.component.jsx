import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/customButton-component';
import CartItem from '../cart-item/cart-item.component';
// import { selectCartItems } from '../../redux/cart/cart.selectors';
// import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import {useNavigate} from "react-router-dom"
import './cart-dropdown.styles.scss';

const navigate = useNavigate();

// const CheckoutNav=()=>{
//   navigate('/');
// };


const CartDropdown = ({cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ?(cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      ):(
        <span className='empty-message'>your cart is empty</span>
      )
      }
    </div>
    <button onClick={()=>navigate("/home")}>
      GOTOCHECKOUT
    </button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
// export default CartDropdown;