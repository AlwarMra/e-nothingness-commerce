import React from 'react'
import { Link } from 'react-router-dom'
import { toEuro } from '../../utils'
import RemoveIcon from '../Icons/RemoveIcon'

const DrawerProduct = ({ prod, actions, dispatch }) => {
  const price = toEuro(prod.price)
  return (
    <div className='drawer__product'>
      <Link
        to={`/products/${prod.slug}`}
        state={{ id: prod.id }}
        className='drawer__product__img'
        onClick={() => dispatch({ type: actions.SHOW_CART, payload: true })}
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
                <td
                  onClick={() =>
                    dispatch({
                      type: actions.SUBSTRACT_FROM_CART,
                      payload: prod,
                    })
                  }
                >
                  -
                </td>
                <td>{prod.q}</td>
                <td
                  onClick={() => {
                    dispatch({ type: actions.ADD_TO_CART, payload: prod })
                    dispatch({ type: actions.SHOW_CART, payload: true })
                  }}
                >
                  +
                </td>
              </tr>
            </tbody>
          </table>
          <span
            className='drawer__remove'
            onClick={() =>
              dispatch({ type: actions.REMOVE_FROM_CART, payload: prod })
            }
          >
            <RemoveIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DrawerProduct)
