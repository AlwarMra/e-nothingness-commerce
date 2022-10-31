import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ItemsTable } from '../../components/index'
import Store from '../../context/StoreContext'
import getOrder from '../../services/getOrder'
import './Order.css'

const Order = () => {
  const [order, setOrder] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { state, ACTIONS, dispatch } = useContext(Store)
  const { id } = useParams()
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
          <Link className='checkout_text checkout_link' to='/profile'>
            Go back
          </Link>
          <p className='checkout_text'>
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

export default Order
