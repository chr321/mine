import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import "./product.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, add_description, add_button }) {
  const { id, image, title, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  // console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        image,
        title,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div className={`productCard_container ${flex && "product_detail"}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="image" />
      </Link>
      <div>
        <h3>{title}</h3>
        {add_description && (
          <div className="productCard_description">{description}</div>
        )}
        <div className="productCard_rating">
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* rating counter */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        {add_button && <button onClick={addToCart}>add to cart</button>}
      </div>
    </div>
  );
}

export default ProductCard;
