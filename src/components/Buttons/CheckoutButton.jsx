import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import Spinner from '../UXElements/Spinner'
import useCheckout from '../../hooks/useCheckout'
import './Buttons.css'

const CheckoutButton = () => {
  const { submitCheckout, loading } = useCheckout()
  const { state } = useContext(Store)
  const items = state.cart.cartItems
  function submitCart(e) {
    e.preventDefault()
    submitCheckout({ user: state.user, items })
  }

  return (
    <>
      {!loading ? (
        <form onSubmit={submitCart}>
          <button type='submit' className='drawer__btn'>
            CHECKOUT
          </button>
        </form>
      ) : (
        <button className='drawer__btn'>
          <Spinner />
        </button>
      )}
    </>
  )
}

export default CheckoutButton
