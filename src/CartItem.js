import React from 'react'

const CartItem = ({item, deleteCart}) => {
  return (
    <tr className='CartItem'>
        <td><img src={item.image} alt='' width='100px' height='100px'/></td>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>${parseFloat(item.price).toFixed(2)}</td>
        <td><button type='button' onClick={() => deleteCart(item.id)}>Delete</button></td>
    </tr>
  )
}

export default CartItem