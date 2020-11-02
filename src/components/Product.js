import React from 'react'
import '../styles/Product.css'
import {AiFillStar}from 'react-icons/ai'
import productImage from '../assets/product.jpg'

function Product({id,title,image,price,rating}) {
    return (
        <div className='product'>
            <div className="product-info">
                <div className="product-title">{title}</div>
                <div className='product-price'>
                    <strong>{price}</strong>
                    <small> $</small>
                </div>

                <div className="product-rating">
                    {
                        Array(rating).fill().map(_=>(
                            <div><AiFillStar/></div>
                            ))
                        }
                </div>
            </div>
            
            <img src={productImage} alt=""/>
            <button>Add to cart</button>
        </div>
    )
}

export default Product
