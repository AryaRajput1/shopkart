import { Link } from 'react-router-dom';
import '../css/Navbar.css'
import {BsFillCartFill,BsSearch} from 'react-icons/bs'
function Navbar() {
  return (
    <nav>
        <h1>Shopkart</h1>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><a href='/products'>Products</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact Us</a></li>
            <li><a href='/search'><BsSearch/></a></li>
            <li><Link to='/cart'><BsFillCartFill/></Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;