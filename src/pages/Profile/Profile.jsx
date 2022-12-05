import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { OrderSkeleton } from '../../components'
import Logout from '../../components/Icons/Logout'
import Store from '../../context/StoreContext'
import getOrders from '../../services/gerOrders'
import { toEuro, formatDate } from '../../utils'
import './Profile.css'
const Profile = () => {
  const [orders, setOrders] = useState([])
  const { state, ACTIONS, dispatch } = useContext(Store)
  const navigate = useNavigate()

  const skeletons = Array.from({ length: 5 }, (_, i) => (
    <OrderSkeleton key={i} />
  ))

  useEffect(() => {
    getOrders({ id: state.user.id, token: state.user.token }).then(res => {
      res.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
      setOrders(res)
    })
  }, [])

  return (
    <div className='container'>
      <div className='profile'>
        <div className='profile__flex'>
          <h1>Welcome {state.user.name}</h1>
          <span
            className='logout'
            onClick={() => {
              dispatch({ type: ACTIONS.SIGN_OUT })
              navigate('/')
            }}
          >
            <Logout />
          </span>
        </div>
        <div className='profile__orders'>
          <h3>Nobody`s orders</h3>
          {orders.length === 0 ? (
            <div className='orders__loading'>{skeletons}</div>
          ) : (
            orders.map(order => (
              <div key={order.checkoutId} className='profile__order'>
                <Link to={`/profile/order/${order.checkoutId}`}>
                  <p>
                    <span className='order__highlight'>Order:</span> #
                    {order.checkoutId.slice(-6)}
                  </p>
                  <p className='order__info'>
                    <span className='order__highlight'>Total Price:</span>{' '}
                    {toEuro(order.total)} <br />
                    <span className='order__highlight'>Date:</span>{' '}
                    {formatDate(new Date(order.createdAt))}
                  </p>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
