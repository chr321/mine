import React from "react";
import { BounceLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}>
      <BounceLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
