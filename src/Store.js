import React from 'react'
import Item from './Item';
const Store = ({items}) => {
  return (
    <main className='Items'>
        {items.map((item) => (
            <Item
                item={item}
                key={item.id}
            />
        ))}
    </main>
  )
}

export default Store