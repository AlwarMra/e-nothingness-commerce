import React, { useContext, useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CheckoutButton, ItemsTable } from '../../components'
import Store from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {
  const [cancel, setCancel] = useState(false)
  const [searchParams] = useSearchParams()
  const { state } = useContext(Store)
  useEffect(() => {
    setCancel(searchParams.get('checkout_cancel'))
  }, [])
  return (
    <div className='container'>
      <div className='inner__padding cart__page'>
        <h1 className='cart__title'>CART</h1>
        {state.cart.cartItems.length > 0 ? (
          <>
            <ItemsTable
              items={state.cart.cartItems}
              totalQ={state.cart.totalQuantity}
              totalP={state.cart.totalPrice}
              isCart={true}
            />
            {cancel && (
              <p className='cart__cancel__text'>
                Payment was cancelled, modify your cart or keep on buying!
              </p>
            )}
            <div className='cart__checkout'>
              <CheckoutButton />
            </div>
          </>
        ) : (
          <div className='cart__empty inner__padding cart__page'>
            <Link to='/'>
              Cart is empty, please do not purchase something before leaving
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
