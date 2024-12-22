import React, { useEffect, useState } from "react";
import img1 from "../../assets/hm2-pro-7.webp";
import { Link } from "react-router-dom";
import './../cart/cart.css'
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../Api/WishlistSlice";
import { add } from "../../Api/cartSlice";




const WishListPage = () => {

    const dispatch = useDispatch();

const wishList = useSelector(state => state.wishlist)
console.log(wishList);

  const addtocart =(item) =>{
    const product = {
        id:item.id,
        image: item.image,
        description: item.description,
        price: item.price

    }
    dispatch(add(product))
  }

  return (
    <div>  
    {
        wishList.length > 0 ? (
            <div className="container my-5">
  
  {
      wishList.map((item, index) => (
          <div className="row my-5" key={item.id}>
      <div className="col-xl-5 col-md-5 col-lg-4 col-sm-6">
        <div className="cart_img">
          <img src={item.image} className="w-100 main-img" />
        </div>
      </div>
      <div className="col-xl-7 col-md-7 col-lg-8 col-sm-6 modal_txt my-5">
        <h2>Rs.{item.price}</h2>
        <div className="text-wraper2">
          <div>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
          </div>
          <p>
       {item.description}
          </p>
        </div>
        <button className="add_crt_btn" onClick={addtocart} >add to cart</button> <br/>
        <button className="add_crt_btn" onClick={() => dispatch(removeFromWishlist(item.id))}>remove from Wishlist</button>
      </div>
    </div>  
      ))
  }
    
   
  </div>
    
        ):(
            <div className="d-flex justify-content-center my-5">
          <Link className="add_crt_btn bg " to={'/'}>Shop Now</Link>
        </div>
        )
    }
 
       
     


    </div>
  );
};

export default WishListPage;
