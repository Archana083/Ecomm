import React, { useEffect } from "react";
import ProductCard from "../../component/productCard/productCard";
import { images } from "./ProductData";
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from "../../Api/productDetailSLice"
import Loader from "../../component/Loader/Loader";


const ProductList = () => {

  const dispatch = useDispatch()

  const {product, loading, error} = useSelector((state)=>state.product)
  console.log(product);
  
 

  useEffect(()=>{ 
 dispatch(getProduct())
  }, [])

  
  return (
    <>
  {
    loading ? <Loader/> : 
    product.length > 0 ? (
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
    ): 
    <div className="d-flex justify-content-center items-center">
          <p>No Data Found</p>
        </div> 
  }
   
    </>
  );
};

export default ProductList;
