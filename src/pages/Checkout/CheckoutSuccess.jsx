import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ItemsTable } from '../../components/index'
import Store from '../../context/StoreContext'
import getOrder from '../../services/getOrder'
import './Checkout.css'

const CheckoutSuccess = () => {
  const [order, setOrder] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { state, ACTIONS, dispatch } = useContext(Store)
  const id = searchParams.get('session_id')

  useEffect(() => {
    getOrder({ id })
      .then(async res => {
        if (res.err) return navigate('/checkout_cancel')
        await setOrder(res)
        setLoading(false)
        dispatch({ action: ACTIONS.CLEAR_CART, payload: true })
      })
      .catch(err => {
        console.log(err)
        navigate('/checkout_cancel')
      })
  }, [id])

  return (
    <div className='container'>
      {loading ? (
        <div>loading...</div>
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
