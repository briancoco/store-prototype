import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
        <ul className='NavBar'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar