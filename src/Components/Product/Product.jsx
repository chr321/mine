import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./product.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error: " + err);
        setIsLoading(false);
      });
  }, [setProducts]);

  // console.log(products);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product_container">
          {products?.map((data) => {
            return (
              <ProductCard product={data} key={data.id} add_button={true} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Product;
