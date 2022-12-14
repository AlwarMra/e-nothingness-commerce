import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ItemsTable } from '../../components/index'
import Store from '../../context/StoreContext'
import getOrder from '../../services/getOrder'
import './Checkout.css'

const CheckoutSuccess = () => {
  const [order, setOrder] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [searchParams] = useSearchParams()
  const { state, ACTIONS, dispatch } = useContext(Store)
  const id = searchParams.get('session_id')

  useEffect(() => {
    getOrder({ id, token: state.user.token })
      .then(async res => {
        if (res.err) return setError(true)
        await setOrder(res)
        setLoading(false)
        dispatch({ type: ACTIONS.CLEAR_CART, payload: true })
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  if (error)
    return <div className='checkout_error'>The order was not found</div>

  return (
    <div className='container'>
      {loading ? (
        <div className='checkout_loading'>Loading...</div>
      ) : (
        <div className='checkout'>
          <h1 className='checkout__title'>
            Thank you a lot {state.user.name}!
          </h1>
          <p className='checkout__text'>
            Here is your order resume, not that it matters, you just bought
            nothing:
          </p>
          <ItemsTable
            items={order.products}
            totalQ={order.totalQ}
            totalP={order.total}
          />
        </div>
      )}
    </div>
  )
}

export default CheckoutSuccess
