import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function LayOut({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default LayOut;
