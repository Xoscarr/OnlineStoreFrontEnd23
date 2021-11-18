import React, { useState, useEffect } from "react";
import "./catalog.css";
import Product from "./product";
import QuantityPicker from "./quantityPicker";
import DataService from "../services/dataService";
import ProdCount from "./prodCount.jsx";

const Catalog = () => {
  // create a data state variable to contain an array
  const [data, setData] = useState([]);

  const loadData = () => {
    console.log("catalog loaded!");
    // get data from the service
    let service = new DataService(); //create a instance of a class
    let response = service.getCatalog();
    console.log("The Data", response);
    setData(response);
  };

  // when the component loads, excute the arrow fn
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="catalog">
      <h3>Men</h3>
      <ProdCount count={data.length}></ProdCount>
      <div className="product-container">
        {data.map((prod) => (
          <Product key={prod._id} prodData={prod}></Product>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
