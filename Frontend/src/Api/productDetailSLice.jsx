import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { json } from "react-router";
import axios from 'axios'




export const getProduct = createAsyncThunk(
    "productDetail/getProduct",
    async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/products/");
      return response.data; 
    }
  );
const initialState = {
    product:[],
    loading: false,
    error: null,
}

export const productDetail = createSlice({
    name:"productDetail",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getProduct.pending, (state) =>{
            state.loading = true;
        })
        .addCase(getProduct.fulfilled, (state, action)=>{
            state.loading = false;
            state.product = action.payload;
        })
        .addCase(getProduct.rejected, (state, action)=>{
            state.error = action.payload.message;
            state.loading = false;
        })
    }

})


export default productDetail;