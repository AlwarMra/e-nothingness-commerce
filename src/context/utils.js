function addToCart(item, array) {
  const existProduct = array.find(prod => prod.id === item.id)

  if (existProduct) {
    return array.map(prod => {
      if (prod.id === item.id) {
        return { ...prod, q: prod.q + item.q }
      }
      return prod
    })
  } else {
    return [...array, item]
  }
}

function substractFromCart(item, array) {
  const existProduct = array.find(prod => prod.id === item.id)
  if (existProduct.q > 1) {
    return array.map(prod => {
      if (prod.id === item.id) {
        return { ...prod, q: prod.q - 1 }
      }
      return prod
    })
  } else {
    return removeFromCart(item, array)
  }
}

function removeFromCart(item, array) {
  const newArray = array.filter(prod => prod.id !== item.id)
  console.log('ffff', newArray)
  return newArray
}

function calculateTotalQuantity(array) {
  let q = 0
  for (let i = 0; i < array.length; i++) {
    q += array[i].q
  }
  return q
}
function calculateTotalPrice(array) {
  let price = 0

  for (let i = 0; i < array.length; i++) {
    price += array[i].q * array[i].price
  }
  return price
}

export {
  addToCart,
  substractFromCart,
  removeFromCart,
  calculateTotalQuantity,
  calculateTotalPrice,
}
