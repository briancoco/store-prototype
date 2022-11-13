import React from 'react'
import CartItem from './CartItem';
const Cart = ({cart, deleteCart}) => {

  return (
    cart.length > 0 ? 
      <table className='Cart'>
        <tr>
          <th>Item</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map((item) => (<CartItem 
          item={item}
          key={item.id}
          deleteCart={deleteCart}
        />))}
      </table>
    :
      <p style={{textAlign: 'center'}}>Cart Empty</p>
    
  )
}

export default Cart