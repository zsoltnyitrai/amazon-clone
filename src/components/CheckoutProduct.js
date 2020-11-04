import React from 'react'
import {AiFillStar}from 'react-icons/ai'
import '../styles/CheckoutProduct.css'
import {useStateValue} from '../StateProvider'


function CheckoutProduct({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue()
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,

        })
    }
    return (
        <div className='checkout-product'>
            <img  src={image} className="checkout-product-image" alt=''/>
            <div className="checkout-product-info">
                <div className="checkout-procut-title">{title}</div>
                <div className="checkout-procut-price">{price} $</div>
                <div className="checkout-procut-rating">
                    {Array(rating).fill().map((_,i)=>(
                        <div><AiFillStar/></div>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
