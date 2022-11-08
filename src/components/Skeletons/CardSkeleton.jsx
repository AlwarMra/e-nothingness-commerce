import React from 'react'

const CardSkeleton = () => {
  return (
    <div className='card__skeleton'>
      <div className='aspect-ratio-box skeleton__aspect'>
        <div className='skeleton skeleton__img' />
      </div>
      <p className='skeleton skeleton__title' />
      <div className='skeleton skeleton__button' />
    </div>
  )
}

export default CardSkeleton
