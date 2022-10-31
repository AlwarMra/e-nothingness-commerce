import { URL } from './settings'

function getOrders({ id, token }) {
  return fetch(`${URL}api/orders/customerorders/${id}`, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}

export default getOrders
