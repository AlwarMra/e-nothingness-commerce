import { URL } from './settings'

function getProductBySlug(slug) {
  return fetch(`${URL}api/products/slug/${slug}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}

function getProductById(slug) {
  return fetch(`${URL}api/products/${slug}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}

export { getProductBySlug, getProductById }
