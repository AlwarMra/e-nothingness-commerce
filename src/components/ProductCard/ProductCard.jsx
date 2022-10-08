import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Store from '../../context/StoreContext'
import { toEuro } from '../../utils'
import './ProductCard.css'

const ProductCard = ({ prod }) => {
  const [adding, setAdding] = useState(false)
  const { dispatchAddToCart } = useContext(Store)

  const price = toEuro(prod.price)
  return (
    <div className='card'>
      <Link className='card__link' to={`/products/${prod.slug}`}>
        <img className='card__image' src={prod.image} alt={prod.title} />
        <h3 className='card__title'>{prod.name}</h3>
        <p className='card__price'>{price}</p>
      </Link>
      <div className='card__btn__container'>
        {!adding ? (
          <button
            className='card__btn'
            onClick={() => {
              setAdding(prev => !prev)
              setTimeout(() => {
                dispatchAddToCart(prod)
                setAdding(prev => !prev)
              }, 1000)
            }}
          >
            <span>Add to cart</span>
          </button>
        ) : (
          <button className='card__btn'>
            <div className='spinner'>
              <div />
              <div />
              <div />
              <div />
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
