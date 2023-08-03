import '../css/ProductSection.css'
import Product from './Product';


function ProductSection({title,productList}){

    return <div className="product-section">
        <p>{title}</p>
        <div className='product-list'>
        {productList.map(product=><Product key={product.id} product={product}/>)}
        </div>
    </div>
}

export default ProductSection