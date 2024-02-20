import React from "react";
import "./catagory.css";
import { Link } from "react-router-dom";

function CatagoryCard({ data }) {
  // console.log(data)
  function trunc(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }
  return (
    <div className="catagoryC">
      <Link to={`/catagory/${data.category}`}>
        <span>
          <h2>{trunc(data.title, 45)}</h2>
        </span>
        <img src={data.image} alt="image" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
