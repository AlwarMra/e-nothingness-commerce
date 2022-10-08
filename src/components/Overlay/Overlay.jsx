import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import './Overlay.css'

const Overlay = () => {
  const { state, switchModal } = useContext(Store)
  const closeModal = () => {
    switchModal(!state.cart.showModal)
  }
  return (
    <div
      className='overlay'
      aria-hidden={state.cart.showModal}
      onClick={closeModal}
    />
  )
}

export default Overlay
