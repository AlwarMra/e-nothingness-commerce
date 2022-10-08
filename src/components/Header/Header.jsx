import React, { useContext } from 'react'
import Store from '../../context/StoreContext'
import CartIcon from '../Icons/CartIcon'
import './Header.css'

const Header = () => {
  const { state, switchModal } = useContext(Store)
  const totalQ = state.cart.totalQuantity

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__middle'>
            <p>E-NOTHINGNESS</p>
          </div>
          <div className='header__right'>
            <span
              className='header__icon'
              onClick={() => switchModal(!state.cart.showModal)}
            >
              {totalQ > 0 && <span className='header__icon__q'>{totalQ}</span>}
              <CartIcon />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
