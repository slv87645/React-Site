import React, {useState} from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({ products }) {
    return(
        <>
        <h2>What are you looking for?</h2>
        <article>
            <p>Place an order for an animal product you desire.</p>
                    <table id ='itemTable'>
                        <caption> Pet Goods for sale</caption>
                        <thead>
                            <tr>
                                <th>Item, company</th>
                                <th>Price</th>
                                <th>Choose Quantity</th>
                            </tr>
                        </thead>
                    <tbody>
                    {products.map((currentItem, i) => <ProductRow item={currentItem} key={i} />)}
                    </tbody>
                    </table>
        </article>
    </>
    );
}
export default OrderPage;
