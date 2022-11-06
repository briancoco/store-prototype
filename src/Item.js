import React from 'react'

const Item = ({item}) => {
    //each item needs a picture and name
  return (
    <div>
        <img src={item.image} alt='' width='200px' height='200px'/>
    </div>
  )
}

export default Item