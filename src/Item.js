import React from 'react'
import {Link} from 'react-router-dom';
const Item = ({item}) => {
    //each item needs a picture and name
  return (
    <div>
        <Link to={`/store/${item.id}`}>
          <div className='Image'>
            <img className='ItemIcon' src={item.image} alt='' />
          </div>
          <p>{item.title.length > 50 ? item.title.slice(0, 51) + '...' : item.title}</p>
          <p>{`$${parseFloat(item.price).toFixed(2)}`}</p>
        </Link>
    </div>
  )
}

export default Item