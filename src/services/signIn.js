import { URL } from './settings'

function signIn({ email, password }) {
  return fetch(`${URL}api/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
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

export { signIn }
