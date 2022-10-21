const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://e-nothingness.herokuapp.com/'
    : 'http://localhost:5000/'

export { URL }
