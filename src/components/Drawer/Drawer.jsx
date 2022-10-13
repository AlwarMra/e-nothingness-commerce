import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import { toEuro } from '../../utils'
import './Drawer.css'
import DrawerProduct from './DrawerProduct'

const Drawer = () => {
  const { state, ACTIONS, dispatch } = useContext(Store)

  const items = state.cart.cartItems
  const totalPrice = toEuro(state.cart.totalPrice)
  return (
    <div className='drawer' data-drawer={state.cart.showModal}>
      <div
        className='drawer__header'
        onClick={() =>
          dispatch({ type: ACTIONS.SHOW_CART, payload: !state.cart.showModal })
        }
      >
        CART
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
          Total Price: {totalPrice} - {state.cart.totalQuantity}
          <button>sdfd</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
