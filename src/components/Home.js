import { useState , useEffect } from 'react';
import '../css/Home.css'
import ProductSection from './ProductSection.js'
import productData from '../data.json'
import Specification from './Specification';
import axios from 'axios';
import MiddleBanner from './MiddleBanner';

function Home() {
  const [productList,setProductList] = useState(productData.data);
  useEffect(()=>{
    async function fetchData(){
    const {data} = await axios.get('https://fakestoreapi.com/products')
    setProductList(data)
    console.log(data)
    }
    fetchData();
    return;
 },[])

  return (
    <main>
      <div className='main_banner'>
        <div className='banner-content'>
          <div className='heading'>UnBeatable <span className='mark-black'>Deals!</span></div>
          <p>Sale upto 40% on everything.</p>
          <div>
            <button className='buy-btn'>Buy Now</button>
            <button className='contact-btn'>Contact Us</button>
          </div>
        </div>
        <img src='./main_banner.jpg' alt='banner'/>
      </div>
      <Specification/>
      <ProductSection title="Featured Products" productList={productList.slice(0,8)}/>
      <ProductSection title="Best Selling Product" productList={productList.slice(0,4)}/>
      <MiddleBanner/>
      <ProductSection title="Products" productList={productList}/>
    </main>
  );
}

export default Home;