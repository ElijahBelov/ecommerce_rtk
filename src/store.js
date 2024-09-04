import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
import productReducer from './Components/ProductSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;