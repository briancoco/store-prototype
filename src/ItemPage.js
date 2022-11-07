import React from 'react'
import {useParams} from 'react-router-dom';
const ItemPage = ({items}) => {
  //need to use the id passsed thru our link
  //we can then use this id to find the info of the item we want to display
  //we will need to pass in our items array thru prop to this component
  const { id } = useParams(); // grabs id from our link or path
  const product = items.find((item) => `${item.id}` === id) // cannot use strictly equal bc id is a string not an int like in item
  return (
    <div>
      <img src={product.image} alt='' width='200px' height='200px'/>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default ItemPage