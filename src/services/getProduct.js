const url = import.meta.env.VITE_BACKEND_URI

function getProductBySlug(slug) {
  return fetch(`${url}api/products/slug/${slug}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}

function getProductById(slug) {
  return fetch(`${url}api/products/${slug}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}

export { getProductBySlug, getProductById }
