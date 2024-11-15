import { configureStore } from "@reduxjs/toolkit";
import { productDetail } from "./productDetailSLice";
import { CartSlice } from "./cartSlice";



 const store = configureStore({
    reducer:{
     product : productDetail.reducer,    
     cart : CartSlice.reducer, 
    }
})


export default store;