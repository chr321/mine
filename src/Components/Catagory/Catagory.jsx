import React from "react";
import { catagoryData } from "./catagoryData";
import CatagoryCard from "./CatagoryCard";
import "./catagory.css";

function Catagory() {
  return (
    <section className="catagory_container">
      {catagoryData.map((infos, i) =>
        (infos.id >= 0 && infos.id <= 2) ||
        (infos.id >= 19 && infos.id <= 20) ? (
          <CatagoryCard key={i} data={infos} />
        ) : (
          ""
        )
      )}
    </section>
  );
}

export default Catagory;
