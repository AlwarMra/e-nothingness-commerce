function toEuro(n) {
  return (n / 100).toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
  })
}
function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}
function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/')
}
export { toEuro, formatDate }
