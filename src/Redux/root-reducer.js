// import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });


import { configureStore } from "@reduxjs/toolkit";
const store=configureStore ({
   reducer:{
    user: userReducer,
    cart: cartReducer
   } 
});
export default store;