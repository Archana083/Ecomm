import React, { useEffect, useState } from "react";
import img1 from "../../assets/hm2-pro-7.webp";
import { Link } from "react-router-dom";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Api/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  console.log(cart);

  const [totalAmnt, setTotalAmnt] = useState(0);
  useEffect(() => {
    setTotalAmnt(cart.reduce((acc, item) => acc + parseFloat(item.price), 0));
  }, [cart])


  return (
    <div>
      {
        cart.length > 0 ? (
          <div className="container my-5">
            {
              cart.map((item, index) => (
                <div className="row my-5" key={item.id}>
                  <div className="col-xl-5 col-md-5 col-lg-4 col-sm-6">
                    <div className="cart_img">
                      <img src={item.image} className="w-100 main-img" />
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-7 col-lg-8 col-sm-6 modal_txt my-5">
                    <h2>Rs. {item.price}</h2>
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

                    <button className="add_crt_btn" onClick={() => dispatch(remove(item.id))}>remove from Cart</button>
                  </div>
                </div>

              ))
            }



            <div className="offset-md-5 offset-sm-6 check_txt">
              <h2>Total Items: {cart.length}</h2>
              <h3>Total Amount: {totalAmnt}</h3>
              <button className="add_crt_btn bg">Checkout now</button>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center my-5">
            <Link className="add_crt_btn bg " to={'/'}>Shop Now</Link>
          </div>
        )
      }



    </div>
  );
};

export default CartPage;
