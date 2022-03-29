import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name , seller , img ,price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h2>Price : {price}</h2>
            <h3>Seller : {seller}</h3>
            <h3>Ratings : {ratings}</h3>
            <button>Add to cart</button>

        </div>
    );
};

export default Product;