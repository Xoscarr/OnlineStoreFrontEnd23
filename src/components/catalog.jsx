
import "./catalog.css";
import Product from "./product";
import QuantityPicker from "./quantityPicker";


const Catalog = () => {
    return <div className="catalog">
        <h3>this is where the catalog will go!</h3>
            <div className="product-container">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        </div>
    </div>;
}
export default Catalog;