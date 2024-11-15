import React from "react";
import img1 from "../../assets/single-slide-1.png";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner bg-purple ">
        <div className="container">
          <div className="row pt-5">
          
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6" data-aos="fade-right">
              <div className="slider-content">
                <h3 className="">Smart Products</h3>
                <h1 className="">Summer Offer 2024 Collection</h1>
                <div className="banner-btn">
                  <a className="animated" href="/shop-grid-standard">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6 " data-aos="fade-left">
              <img src={img1} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
