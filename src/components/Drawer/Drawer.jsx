import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import { toEuro } from '../../utils'
import './Drawer.css'
import DrawerProduct from './DrawerProduct'

const Drawer = () => {
  const {
    state,
    switchModal,
    dispatchAddToCart,
    dispatchSubstractFromCart,
    dispatchRemoveFromCart,
  } = useContext(Store)

  const items = state.cart.cartItems
  const totalPrice = toEuro(state.cart.totalPrice)
  return (
    <div className='drawer' data-drawer={state.cart.showModal}>
      <div
        className='drawer__header'
        onClick={() => switchModal(!state.cart.showModal)}
      >
        CART
      </div>
      <div className='drawer__content'>
        <div className='drawer__products'>
          {items.map(item => (
            <DrawerProduct
              prod={item}
              key={item.id}
              addToCart={dispatchAddToCart}
              substractFromCart={dispatchSubstractFromCart}
              removeFromCart={dispatchRemoveFromCart}
              switchModal={switchModal}
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
