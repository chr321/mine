import React from "react";
import Carousel1 from "../../Carousel/Carousel1";
import Catagory from "../../Catagory/Catagory";
import Product from "../../Product/Product";
import LayOut from "../../LayOut/LayOut";

function Landing() {
  return (
    <LayOut>
      <Carousel1 />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing;
