const url = import.meta.env.VITE_BACKEND_URI

export default function getProducts() {
  return fetch(`${url}api/products`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}
