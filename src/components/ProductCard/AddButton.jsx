import React, { useState, useContext } from 'react'
import Store from '../../context/StoreContext'
import Spinner from '../UXElements/Spinner'
const AddButton = ({ product }) => {
  const { dispatch, ACTIONS } = useContext(Store)
  const [adding, setAdding] = useState(false)

  return !adding ? (
    <button
      className='card__btn'
      onClick={() => {
        setAdding(prev => !prev)
        setTimeout(() => {
          dispatch({ type: ACTIONS.ADD_TO_CART, payload: product })
          dispatch({ type: ACTIONS.SHOW_CART, payload: true })
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
