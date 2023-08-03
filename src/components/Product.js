import { useDispatch, useSelector } from 'react-redux'
import '../css/Product.css'
import addToCart from '../action/index.js'
import { useEffect, useState } from 'react'

function Product({product}){
    const dispatch = useDispatch()
    const stateData = useSelector((state)=>state)
    const [isInCart,setIsInCart] = useState(false);
   async function addToCartHandler(product){
        await dispatch(addToCart(product))
        const index= stateData.cartReducer.items.find(item=>item.id==product.id)
        setIsInCart(index !=-1)
    }
    return <div className='product'>
        <img className='product_img' src={product.image}/>
        <div>
            <span className='product_category'>{product.category}</span>
            <h3 className='product_name'>{product.title}</h3>
            <strong className='product_price'>{product.price} Re.</strong>
        </div>
        <div>
            {
                !isInCart?<button className='add_to_cart_button' onClick={()=>addToCartHandler(product)}>
                Add To Cart
            </button>:<button className='add_to_cart_button' onClick={()=>addToCartHandler(product)}>
                Remove From Cart
            </button>
            }
            
        </div>
    </div>
}
export default Product