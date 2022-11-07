import React from 'react'
import {Link} from 'react-router-dom';
const Item = ({item}) => {
    //each item needs a picture and name
  return (
    <div>
        <Link to={`/store/${item.id}`}>
          <img src={item.image} alt='' width='200px' height='200px'/>
          <p>{item.title.length > 50 ? item.title.slice(0, 51) + '...' : item.title}</p>
          <p>{`$${parseFloat(item.price).toFixed(2)}`}</p>
        </Link>
    </div>
  )
}

export default Item