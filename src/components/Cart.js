import { useSelector } from "react-redux"
import Product from "./Product"
import { useState } from "react"
import CartItem from "./CartItem"
import '../css/CartItem.css'
import {BsFillCartFill,BsSearch} from 'react-icons/bs'

function Cart(){
    const stateData = useSelector((state)=>state)
    const [items,setItems] = useState(stateData.cartReducer.items)
    const total = ()=>{
        let sum =0;
        items.forEach(element => {
            sum+=element.price
        });
        return sum;
    }
    return <>
    <div className="cart__banner">Cart <BsFillCartFill className="cart__banner-icon"/></div>
    <div className="cart">
        <div className="cart_item_list">
        <h2 className="cart_item_list--heading">Cart Items</h2>
        {items.map(product=><CartItem key={product.id} product={product}/>)}
        </div>
        <div className="cart_bill">
            <p className="cart_bill--heading">Cart Totals</p>
            <div className="cart_bill--sub-bill">
            <div className="cart_bill--sub-bill-row" ><span>Cart Subtotal</span><span>{total()}</span></div>
            <div className="cart_bill--sub-bill-row"><span>Shipping</span><span>Free</span></div>
            </div>
            <div className="cart_bill--final_total">Total : {total()} Re.</div>
            <div className="cart_bill--checkout"><button className="cart_bill--checkout-btn">Checkout</button></div>
        </div>
    </div>
    </>
}

export default Cart