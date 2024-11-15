import React, { useEffect } from "react";
import ProductCard from "../../component/productCard/productCard";
import { images } from "./ProductData";
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from "../../Api/productDetailSLice"


const ProductList = () => {

  const dispatch = useDispatch()

  const {product, loading, error} = useSelector((state)=>state.product)
  console.log(product);
  
 

  useEffect(()=>{ 
 dispatch(getProduct())
  }, [])

  
  return (
    <>
  
    <div className="container mt-5">
     <div className="row">
      {product.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
      </div>
      </div>
    </>
  );
};

export default ProductList;
