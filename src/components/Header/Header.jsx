import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Store from '../../context/StoreContext'
import CartIcon from '../Icons/CartIcon'
import UserIcon from '../Icons/UserIcon'
import './Header.css'

const Header = () => {
  const { state, dispatch, ACTIONS } = useContext(Store)
  const totalQ = state.cart.totalQuantity
  const location = useLocation()
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__middle'>
            <Link className='header__title' to='/'>
              E-NOTHINGNESS
            </Link>
          </div>
          <div className='header__right'>
            <span className='header__icon'>
              {state.user !== null ? (
                <Link to='/profile'>
                  <UserIcon />
                </Link>
              ) : (
                <Link to='/signin'>
                  <UserIcon />
                </Link>
              )}
            </span>
            {location.pathname.replace(/\//g, '') !== 'cart' && (
              <span
                className='header__icon'
                onClick={() =>
                  dispatch({
                    type: ACTIONS.SHOW_CART,
                    payload: !state.cart.showModal,
                  })
                }
              >
                {totalQ > 0 && (
                  <span className='header__icon__q'>{totalQ}</span>
                )}
                <CartIcon />
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
