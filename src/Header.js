import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <h1 className='StoreName'><Link to='/'>Coco's Store</Link></h1>
  )
}

export default Header