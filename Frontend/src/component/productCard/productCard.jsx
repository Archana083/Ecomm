import React, { useState } from "react";
import "./productCard.css";
import { NavLink, Link } from "react-router-dom";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/4.jpg";
import img4 from "../../assets/5.jpg";
import img5 from "../../assets/7.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { add } from "../../Api/cartSlice";


const ProductCard = ({ image, description, price }) => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMainImage = (img) => {
    setMainImage(img);
  };

  const truncateDiscription = (description, maxlength) => {
    if (description.length > maxlength) {
      return description.substring(0, maxlength) + "...";
    }
  };
  const truncatedDescription = truncateDiscription(description, 30);

  const addTocart = () =>{
    const product = {  id: Date.now(), image, description, price };
  dispatch(add(product ));

  }

  return (
    <>
      <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
        <div className="product-wrapper">
          <div className="product-img-wrapper">
            <img src={image} className="w-100" alt="Main Product" />
          </div>
          <div className="product-action">
            <div className=" wishlist same-background">
              <i className="bi bi-heart"></i>
            </div>
            <div className="buy-now same-background">
              <Link className="btn-buy">Buy Now</Link>
            </div>
            <div className="quick-view same-background">
              <i className="bi bi-eye" onClick={handleShow}></i>
            </div>
          </div>
        </div>
        <div className="text-wraper">
          <p> {truncatedDescription}</p>
          <div>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
          </div>
          <h2>Rs. {price}</h2>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="row">
            <div className="col-xl-5 col-md-5 col-lg-4 col-sm-6">
              <img src={image} className="w-100 main-img" />
            </div>
            <div className="col-xl-7 col-md-7 col-lg-8 col-sm-6 modal_txt mt-5">
              <h2>Rs. {price}</h2>
              <div className="text-wraper2">
              <div>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>

                <p> {description}</p>
               
              </div>

              <Link className="add_crt_btn" onClick={addTocart}>Add To Cart</Link>
            </div>
          </div>
        </Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default ProductCard;
