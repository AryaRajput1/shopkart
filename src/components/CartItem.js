import { useDispatch, useSelector } from 'react-redux'
import '../css/CartItem.css'
import addToCart from '../action/index.js'
import { useEffect, useState } from 'react'
import '../css/CartItem.css'
import { FaTrashCan } from "react-icons/fa6";

function CartItem({product}){
    return <div className='cartItem'>
        <img className='cartItem_img' src={product.image}/>
        <div className='cartItem_details'>
            <h3 className='cartItem_name'>{product.title}</h3>
            <strong className='cartItem_price'>{product.price} Re.</strong>
            <strong>Count {1}</strong>
        </div>
        <div>
            <FaTrashCan/> Remove
        </div>
    </div>
}

export default CartItem