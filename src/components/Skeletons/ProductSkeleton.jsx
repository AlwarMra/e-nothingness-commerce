import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className='product product__skeleton'>
      <div className='aspect-ratio-box skeleton__aspect'>
        <div className='skeleton skeleton__img' />
      </div>
      <div>
        <div className='skeleton skeleton__title skeleton__title--big' />
        <div className='skeleton skeleton__title' />
        <div className='skeleton skeleton__info skeleton__info--small' />
        <div className='skeleton skeleton__info skeleton__info--large' />
        <div className='skeleton skeleton__info skeleton__info--large' />
        <div className='skeleton skeleton__info skeleton__info--medium' />
        <div className='skeleton skeleton__button ' />
      </div>
    </div>
  )
}

export default ProductSkeleton
