import React, { useEffect, useState } from "react";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/EndPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  // console.log(product.rating.count);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data.rating);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          add_description={true}
          add_button={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
