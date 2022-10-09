import React from 'react'
import './Skelletons.css'

const ProductSkelleton = () => {
  return (
    <div className='prod__skeleton'>
      <div className='skeleton prod__skeleton__image' />
      <div>
        <div className='skeleton skeleton__title' />
        <p className='skeleton skeleton__text' />
        <p className='skeleton skeleton__text--secondary' />
        <p className='skeleton skeleton__text--terciary' />
        <p className='skeleton skeleton__text' />
        <div className='skeleton skeleton__btn' />
      </div>
    </div>
  )
}

export default ProductSkelleton
