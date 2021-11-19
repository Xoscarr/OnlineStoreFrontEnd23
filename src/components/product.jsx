import React, { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
const Product = (props) => {
  // create a state variable
  const [quantity, setQuantity] = useState(1);
  const quantityChange = (val) => {
    console.log("quantity has changed", val);

    // set the state variable
    setQuantity(val);
  };

  // this is the best practice to have neater variables
  const getTotal = () => {
    let total = quantity * props.prodData.price;
    return total.toFixed(2);
  };
  return (
    <div className="product-page">
      <label className="category">{props.prodData.category}</label>
      <img src={"/images/" + props.prodData.image} alt="" />
      <div class="product-info">
        <h5>{props.prodData.title}</h5>
        <h6>${getTotal()}</h6>
        <h6>${props.prodData.price.toFixed(2)}</h6>

        <QuantityPicker
          test="something"
          onQuantityChange={quantityChange}
        ></QuantityPicker>

        <button className="btn btn-sm btn-dark">Add</button>
      </div>
    </div>
  );
};

export default Product;
