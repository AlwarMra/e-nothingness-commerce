import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import DrawerProduct from './DrawerProduct'
import Spinner from '../UXElements/Spinner'
import './Drawer.css'
import { toEuro } from '../../utils'
import useCheckout from '../../hooks/useCheckout'

const Drawer = () => {
  const { submitCheckout, loading } = useCheckout()
  const { state, ACTIONS, dispatch } = useContext(Store)

  const items = state.cart.cartItems
  const totalPrice = toEuro(state.cart.totalPrice)

  function submitCart(e) {
    e.preventDefault()
    submitCheckout({ user: state.user, items })
  }

  return (
    <div className='drawer' data-drawer={state.cart.showModal}>
      <div
        className='drawer__header'
        onClick={() => dispatch({ type: ACTIONS.SHOW_CART, payload: false })}
      >
        <span>CART</span>
        <span className='drawer__close'></span>
      </div>
      <div className='drawer__content'>
        <div className='drawer__products'>
          {items.map(item => (
            <DrawerProduct
              prod={item}
              key={item.id}
              actions={ACTIONS}
              dispatch={dispatch}
            />
          ))}
        </div>
        <div className='drawer__summary'>
          <p>
            <span>Total Price:</span> {totalPrice}
          </p>
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
        </div>
      </div>
    </div>
  )
}

export default Drawer
