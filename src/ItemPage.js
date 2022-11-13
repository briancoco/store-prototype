import React from 'react'
import {useParams} from 'react-router-dom';
const ItemPage = ({items, addCart}) => {
  //need to use the id passsed thru our link
  //we can then use this id to find the info of the item we want to display
  //we will need to pass in our items array thru prop to this component
  const { id } = useParams(); // grabs id from our link or path
  const product = items.find((item) => `${item.id}` === id) // cannot use strictly equal bc id is a string not an int like in item
  return (
    <div className='Item'>
      <img className='ProductImgLarge' src={product.image} alt=''/>
      <div className='ItemInfo'>
        <p>{product.title}</p>
        <p>${parseFloat(product.price).toFixed(2)}</p>
        <button type='button' onClick={() => addCart(product)}>Add to Cart</button>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ItemPage