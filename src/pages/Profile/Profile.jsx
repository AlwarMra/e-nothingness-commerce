import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Store from '../../context/StoreContext'
import getOrders from '../../services/gerOrders'
import { toEuro, formatDate } from '../../utils'
import './Profile.css'
const Profile = () => {
  const [orders, setOrders] = useState([])
  const { state } = useContext(Store)

  useEffect(() => {
    getOrders({ id: state.user.id, token: state.user.token }).then(res => {
      console.log(res)
      setOrders(res)
    })
  }, [])

  return (
    <div className='container'>
      <div className='profile'>
        <h1>Welcome {state.user.name}</h1>
        <div className='profile_orders'>
          <h3>Nobody`s orders</h3>
          {orders.map(order => (
            <div key={order.checkoutId} className='profile_order'>
              <Link to={`/profile/order/${order.checkoutId}`}>
                <p>
                  <span className='order_highlight'>Order:</span> #
                  {order.checkoutId.slice(-6)}
                </p>
                <p>
                  <span className='order_highlight'>Total Price:</span>{' '}
                  {toEuro(order.total)} <br />
                  <span className='order_highlight'>Date:</span>{' '}
                  {formatDate(new Date(order.createdAt))}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
