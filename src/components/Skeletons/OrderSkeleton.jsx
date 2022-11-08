import React from 'react'
import './Skeletons.css'

const OrderSkeleton = () => {
  return (
    <div className='order__skeleton'>
      <p className='skeleton skeleton__info skeleton__info--large' />
      <div className='order__skeleton__container'>
        <p className='skeleton skeleton__info skeleton__info--small' />
        <p className='skeleton skeleton__info skeleton__info--medium' />
      </div>
    </div>
  )
}

export default OrderSkeleton
