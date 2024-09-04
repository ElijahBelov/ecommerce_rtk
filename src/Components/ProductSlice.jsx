import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ], 
  disabledProductIds: [],
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
        disableProductId(state, action) {
            let productId = action.payload;
            if (!(state.disabledProductIds.includes(productId))){
                state.disabledProductIds.push(productId);
            }  
        },
        enableProductId(state, action) {
            let productId = action.payload;
            state.disabledProductIds = state.disabledProductIds.filter(function(item) {
                return item !== productId;
            });
        },
  }
});

export const {
    disableProductId, 
    enableProductId
} = ProductSlice.actions;
export default ProductSlice.reducer;