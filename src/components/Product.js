import React from 'react'
import '../styles/Product.css'
import {AiFillStar}from 'react-icons/ai'
import productImage from '../assets/product.jpg'
import { useStateValue } from '../StateProvider'


function Product({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue()

    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            }
        })
    }

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
            <button onClick={()=>addToBasket()}>Add to cart</button>
        </div>
    )
}

export default Product
