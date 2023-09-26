import React, {useState} from 'react';
import {RiAddFill, RiSubtractFill} from 'react-icons/ri';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increase = () => setQuantity (quantity === 10 ? quantity: quantity + 1);
    const decrease = () => setQuantity (quantity === 0 ? quantity: quantity - 1);
    return (
        <div className =''>
            <i><RiSubtractFill onClick={decrease} className="bigger"/></i>
            <span class="qv">{quantity}</span>
            <i><RiAddFill onClick={increase} className="bigger"/></i>
        </div>
    );
}
export default ProductQuantity;