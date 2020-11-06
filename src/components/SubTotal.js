import React from 'react'
import '../styles/SubTotal.css'
import { useStateValue } from '../StateProvider'

function SubTotal() {
    
    const [{basket},dispatch]=useStateValue()
    console.log(basket)
    const finalPrice= basket.reduce((total,item)=>{return(total+item.price)},0)
    console.log(finalPrice  )

    return (
        <div className='subtotal'>
            <div className='subtotal-title'>Subtotal</div>
            <div>{basket.length} Products</div>
        <div> price: {finalPrice.toFixed(3)} $</div>
            <button className='subtotal-button'>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
