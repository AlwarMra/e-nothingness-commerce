import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import DrawerProduct from './DrawerProduct'
import CheckoutButton from '../Buttons/CheckoutButton'
import './Drawer.css'
import { toEuro } from '../../utils'

const Drawer = () => {
  const { state, ACTIONS, dispatch } = useContext(Store)

  const items = state.cart.cartItems
  const totalPrice = toEuro(state.cart.totalPrice)

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
        {items.length > 0 ? (
          <>
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
              <CheckoutButton />
            </div>
          </>
        ) : (
          <div className='drawer__empty'>
            <p>Cart is not empty</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Drawer
