import React from 'react'
import { Link } from 'react-router-dom'
import { toEuro } from '../../utils'
import AddButton from '../Buttons/AddButton'
import './ProductCard.css'

const ProductCard = ({ prod }) => {
  const price = toEuro(prod.price)
  return (
    <div className='card'>
      <Link
        className='card__link'
        state={{ id: prod.id }}
        to={`/products/${prod.slug}`}
      >
        <img className='card__image' src={prod.image} alt={prod.title} />
        <h3 className='card__title'>{prod.name}</h3>
        <p className='card__price'>{price}</p>
      </Link>
      <div className='card__btn__container'>
        <AddButton product={prod} />
      </div>
    </div>
  )
}

export default ProductCard
