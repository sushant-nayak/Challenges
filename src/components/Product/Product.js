import React from "react";

function Product(props) {
  return (
    <div id={props.id}>
      <h2>{props.product.name}</h2> -
      <span>
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </div>
  );
}

export default Product;
