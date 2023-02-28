// import { combineReducers } from 'redux';
import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
 };
// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });

const rootReducer = combineReducers({ 
      user: userReducer,
      cart: cartReducer,
      directory: directoryReducer,
 })

 const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store=configureStore ({
//    reducer:{
//     user: userReducer,
//     cart: cartReducer
//    } 
// });
const store = configureStore({
   reducer: persistedReducer
 })
export default store;
// export const persistor = persistStore(store);
