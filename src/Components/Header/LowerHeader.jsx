import React from "react";
import { HiMenu } from "react-icons/hi";
import "./header.css";

function LowerHeader() {
  return (
    <div className="header__lower">
      <ul>
        <li className="menu">
          <HiMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Services</li>
        <li>Resgistry</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
