import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Store from '../../context/StoreContext'
import CartIcon from '../Icons/CartIcon'
import './Header.css'

const Header = () => {
  const { state, dispatch, ACTIONS } = useContext(Store)
  const totalQ = state.cart.totalQuantity

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__middle'>
            <Link to='/'>E-NOTHINGNESS</Link>
          </div>
          <div className='header__right'>
            <span
              className='header__icon'
              onClick={() =>
                dispatch({
                  type: ACTIONS.SHOW_CART,
                  payload: !state.cart.showModal,
                })
              }
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
