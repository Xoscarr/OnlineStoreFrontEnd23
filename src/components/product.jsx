import "./product.css";
import QuantityPicker from "./quantityPicker";
const Product = (props) => {
  return (
    <div className="product-page">
      <label className="category">{props.prodData.category}</label>
      <img src={"/images/" + props.prodData.image} alt="" />
      <div class="product-info">
        <h5>{props.prodData.title}</h5>
        <h6>$Total</h6>
        <h6>${props.prodData.price}</h6>

        <QuantityPicker> </QuantityPicker>

        <button className="btn btn-sm btn-dark">Add</button>
      </div>
    </div>
  );
};

export default Product;
