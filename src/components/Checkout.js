import React from 'react'
import { useStateValue } from '../StateProvider'
import checkoutAd from '../assets/checkoutAd.PNG'
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './SubTotal'
import SubTotal from './SubTotal'

function Checkout() {
    const[{basket}]=useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout-left">
                <img className='checkout-ad' src={checkoutAd}/>
                {basket?.length===0 ?(
                    <div className='checkout-title'>
                        Your basket is empty
                    </div>
                ):(
                    <div>
                        <div className='checkout-title'>Your items:</div>
                        {basket.map((item)=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />

                        ))}
                    </div>
                )}
            </div>
            
                {basket.length>0 &&(
                    <div className ='checkout-right'>
                        <SubTotal/>
                    </div>
                )}
        </div>
        
    )
}

export default Checkout
