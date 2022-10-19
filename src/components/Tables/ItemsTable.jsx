import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Store from '../../context/StoreContext'
import { toEuro } from '../../utils'
import './Table.css'
const ItemsTable = ({ items, totalQ, totalP, isCart = false }) => {
  const { ACTIONS, dispatch } = useContext(Store)
  return (
    <table className='items__table'>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id || item._id}>
            <td>
              <div>
                <Link to={`../products/${item.slug}`} className='item__info'>
                  <img src={item.image} width='100' height='100' />
                  <h3 className='item__title'>{item.name}</h3>
                </Link>
              </div>
            </td>
            <td>
              {isCart ? (
                <table className='drawer__product__table cart__item__table'>
                  <tbody>
                    <tr>
                      <td
                        className='item__table__cell'
                        onClick={() =>
                          dispatch({
                            type: ACTIONS.SUBSTRACT_FROM_CART,
                            payload: item,
                          })
                        }
                      >
                        -
                      </td>
                      <td className='item__table__cell'>{item.q}</td>
                      <td
                        className='item__table__cell'
                        onClick={() =>
                          dispatch({ type: ACTIONS.ADD_TO_CART, payload: item })
                        }
                      >
                        +
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <>{item.q}</>
              )}
            </td>
            <td>{toEuro(item.price)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td className='underline'>{totalQ}</td>
          <td className='underline'>
            <p>{toEuro(totalP)}</p>
            <p></p>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default ItemsTable
