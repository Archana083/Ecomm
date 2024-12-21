import React from "react";
import img1 from "../../assets/support-1.png";
import img2 from "../../assets/support-2.png";
import img3 from "../../assets/support-3.png";
import img4 from "../../assets/support-4.png";
import "./qualityCard.css"
const QulityCard = () => {
  return (
    <div className="container my-5">
      <div className="row parent-quality-card">
        <div className="col-3 col-sm-6 col-xs-12 py-2 d-flex gap-3 align-items-center quality-card">
          <div className="img-quality">
            <img src={img1} className="w-100" />
          </div>

          <div className="quality-title">
            <h2 className="fs-4">Free Shipping</h2>
            <p>Free shipping on all order</p>
          </div>
        </div>
        <div className="col-3 col-sm-6 col-xs-12 py-2 d-flex gap-3 align-items-center quality-card">
          <div className="img-quality">
            <img src={img2} className="w-100" />
          </div>

          <div className="quality-title">
            <h2 className="fs-4">Free Shipping</h2>
            <p>Free shipping on all order</p>
          </div>
        </div>
        <div className="col-3 col-sm-6 py-2 d-flex gap-3 align-items-center quality-card">
          <div className="img-quality">
            <img src={img3} className="w-100" />
          </div>

          <div className="quality-title">
            <h2 className="fs-4">Free Shipping</h2>
            <p>Free shipping on all order</p>
          </div>
        </div>
        <div className="col-3 col-sm-6  d-flex gap-3 align-items-center quality-card">
          <div className="img-quality">
            <img src={img4} className="w-100" />
          </div>

          <div className="quality-title">
            <h2 className="fs-4">Free Shipping</h2>
            <p>Free shipping on all order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QulityCard;
