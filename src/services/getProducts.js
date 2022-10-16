import { URL } from './settings'

export default function getProducts() {
  return fetch(`${URL}api/products`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}
