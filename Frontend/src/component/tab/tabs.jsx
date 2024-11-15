import React, { useState } from "react";
import "./tabs.css";
import { Tab, Tabs } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import ProductCard from "../productCard/productCard";
import { images, images2, images3 } from "../../pages/product/ProductData";

const TabsCard = () => {
  const [key, setKey] = useState("home");

  return (
    <div className="container my-5">
      <div className="tabs-title">
        <h2 className="text-center ">DAILY DEALS!</h2>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)} // Update state when a tab is selected
        className="mb-3"
      >
        <Tab eventKey="home" title="New Arival">
          <div className="row">
            {images.map((product) => (
              <ProductCard key={product.id} image={product.image}  price={product.price} description={product.description} />
            ))}
          </div>
        </Tab>

        <Tab eventKey="Best Seller" title="Best Seller">
          <div className="row">
          {images2.map((product) => (
              <ProductCard key={product.id} image={product.image}  price={product.price} description={product.description} />
            ))}
          </div>
        </Tab>

        <Tab eventKey="Sale Items" title="Sale Items">
          <div className="row">
          {images3.map((product) => (
              <ProductCard key={product.id} image={product.image}  price={product.price} description={product.description} />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsCard;
