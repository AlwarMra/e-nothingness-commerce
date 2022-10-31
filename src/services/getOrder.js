import { URL } from './settings'

function getOrder({ id, token }) {
  return fetch(`${URL}api/orders/checkoutsession/${id}`, {
    headers: {
      authorization: token,
    },
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}

export default getOrder
