import { URL } from './settings'

function createCheckoutSession({ items, userInfo }) {
  const body = { items, userInfo }
  return fetch(`${URL}api/checkout/create-checkout-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(res => {
      console.log(res)
      return res
    })
}

export { createCheckoutSession }
