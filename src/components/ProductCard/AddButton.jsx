import React, { useState, useContext } from 'react'
import Store from '../../context/StoreContext'
import Spinner from '../UXElements/Spinner'
const AddButton = ({ product }) => {
  const { dispatchAddToCart } = useContext(Store)
  const [adding, setAdding] = useState(false)

  return !adding ? (
    <button
      className='card__btn'
      onClick={() => {
        setAdding(prev => !prev)
        setTimeout(() => {
          dispatchAddToCart(product)
          setAdding(prev => !prev)
        }, 1000)
      }}
    >
      <span>Add to cart</span>
    </button>
  ) : (
    <button className='card__btn'>
      <Spinner />
    </button>
  )
}

export default AddButton
