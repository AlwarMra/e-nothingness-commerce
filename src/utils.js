function toEuro(n) {
  return (n / 100).toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
  })
}

export { toEuro }
