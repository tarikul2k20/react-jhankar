import React from 'react';
import './Products.css'
const Products = (props) => {
    const {img,name,seller,stock,price}=props.product;
    return (
        <div className='product'>
            <div className='product-img'>
               <img src={img}/>
            </div>

            <div className='product-details'>
               <h4 className='product-name'>{name}</h4><br/>
               <p>By: {seller}</p>
               <p><b>Price: {price}</b></p>
               <p><small>Only {stock} item available.</small></p>
               <button onClick={()=>props.handlerAdd(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;