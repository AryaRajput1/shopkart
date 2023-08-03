import { useSelector } from "react-redux"
import Product from "./Product"
import { useState } from "react"

function Cart(){
    const stateData = useSelector((state)=>state)
    const [items,setItems] = useState(stateData.cartReducer.items)
    return <div>
        {items.map(product=><Product key={product.id} product={product}/>)}
    </div>
}

export default Cart