import { createSlice } from "@reduxjs/toolkit";


const recentViewsSlice = createSlice({
  name: 'recentViewsProduct',
  initialState: {
    products: JSON.parse(sessionStorage.getItem('recentViewsProduct')) || [],
  },
  reducers: {
    addRecentProduct: (state, action) => {
      const product = action.payload;
      const filteredProducts = state.products.filter((p) => p._id !== product._id);
      const updatedProducts = [product, ...filteredProducts];
    //   if (updatedProducts.length > 6) {
    //     updatedProducts.pop();
    //   }
      state.products = updatedProducts;
      sessionStorage.setItem('recentViewsProduct', JSON.stringify(updatedProducts));
    },
  },
});

export const { addRecentProduct } = recentViewsSlice.actions;
export default recentViewsSlice.reducer;
