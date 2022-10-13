import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import './Overlay.css'

const Overlay = () => {
  const { state, ACTIONS, dispatch } = useContext(Store)
  return (
    <div
      className='overlay'
      aria-hidden={state.cart.showModal}
      onClick={() =>
        dispatch({ type: ACTIONS.SHOW_CART, payload: !state.cart.showModal })
      }
    />
  )
}

export default Overlay
