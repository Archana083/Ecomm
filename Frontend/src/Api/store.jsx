import { configureStore } from "@reduxjs/toolkit";
import { productDetail } from "./productDetailSLice";
import { CartSlice } from "./cartSlice";
import { WishlistSlice } from "./WishlistSlice";



 const store = configureStore({
    reducer:{
     product : productDetail.reducer,    
     cart : CartSlice.reducer, 
     wishlist: WishlistSlice.reducer,
    }
})


export default store;