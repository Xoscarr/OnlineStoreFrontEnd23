import React, { useState } from "react"; 

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        console.log("+ button clicked");
        setQuantity(quantity + 1);
    };
    const decrease = () => {
        console.log("- button clicked"); 
        if  (quantity > 1){
        setQuantity(quantity - 1);  
        }
            
    };
    const test1 = () => {
        return "9.99";
    };

    return ( <div className="quantity-picker">
        <button className="btn btn-sm btn-info" onClick={increase}>+</button>
        <label>{quantity}</label>
        <button className="btn btn-sm btn-info" onClick={decrease}>-</button>
        
    </div>
    );
}; 
 export default QuantityPicker; 