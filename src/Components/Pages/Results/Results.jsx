import React, { useEffect, useState } from "react";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/EndPoints";
import ProductCard from "../../Product/ProductCard";
import "./results.css";
import Loader from "../../Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { catagoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data);
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
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Catagory / {catagoryName}</p>
          <hr />

          <dir className="results_container">
            {results?.map((data) => (
              <ProductCard 
              key={data.id} 
              product={data} 
              // add_description={true}
              add_button={true}/>
            ))}
            {/* {console.log(results)} */}
          </dir>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
