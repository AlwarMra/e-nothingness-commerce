import React from 'react'
import { Link } from 'react-router-dom'
import { toEuro } from '../../utils'
import RemoveIcon from '../Icons/RemoveIcon'

const DrawerProduct = ({
  prod,
  addToCart,
  substractFromCart,
  removeFromCart,
  switchModal,
}) => {
  const price = toEuro(prod.price)
  return (
    <div className='drawer__product'>
      <Link
        to={`/products/${prod.slug}`}
        state={{ id: prod.id }}
        className='drawer__product__img'
        onClick={() => switchModal(true)}
      >
        <img src={prod.image} alt={prod.name} />
      </Link>
      <div className='drawer__product__info'>
        <p>
          {prod.name} - {price}
        </p>
        <div className='drawer__table__container'>
          <table className='drawer__product__table'>
            <tbody>
              <tr>
                <td onClick={() => substractFromCart(prod)}>-</td>
                <td>{prod.q}</td>
                <td onClick={() => addToCart(prod)}>+</td>
              </tr>
            </tbody>
          </table>
          <span className='drawer__remove' onClick={() => removeFromCart(prod)}>
            <RemoveIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default DrawerProduct
