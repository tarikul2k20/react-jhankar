import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const first10=fakeData.slice(0,10);
    let [products, setProducts]=useState(first10);
    const [cart, setCart]=useState([]);
    const handlerAdd=(product)=>{
        console.log('added',product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                    {
                        products.map(prod => <Products handlerAdd={handlerAdd} product={prod}></Products>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
         
        </div>
    );
};

export default Shop;