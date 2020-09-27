// This is a Functional Component named Practice
import React from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge7.png";

import products from "../Product/productData.json";
import Product from "../Product/Product";

function Practice() {
  const productComponents = products.map((item) => (
    <Product key={item.id} product={item} />
  ));

  return (
    <div>
      <img src={challenge} alt="Challenge7" width="100%" />
      <hr />
      {productComponents}
    </div>
  );
}

export default Practice;
