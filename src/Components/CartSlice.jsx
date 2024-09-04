import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            let existingItemID = action.payload.id;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === existingItemID){
                    state.cartItems[i].quantity += 1;
                    return;
                }
            }
            state.cartItems.push({...action.payload, quantity: 1});
        },

        removeItemFromCart(state, action) {
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === action.payload){
                    state.cartItems.splice(i, 1);
                    return;
                }
            }
        },

        clearCart(state) {
            state.cartItems = [];
            //setDisabledProducts([]);
            
        },

        increaseItemQuantity(state, action){
            let existingItemID = action.payload;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === existingItemID){
                    state.cartItems[i].quantity += 1;
                    return;
                }
            }
        },

        decreaseItemQuantity(state, action){
            let existingItemID = action.payload;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === existingItemID && state.cartItems[i].quantity > 0){
                    state.cartItems[i].quantity -= 1;
                    if (state.cartItems[i].quantity === 0) {
                        ;
                    }
                    return;
                }
            }
        },
    }
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;


