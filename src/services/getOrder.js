import { URL } from './settings'

function getOrder({ id }) {
  return fetch(`${URL}api/orders/checkoutsession/${id}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}

export default getOrder
