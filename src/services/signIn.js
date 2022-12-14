import { URL } from './settings'

export default function signIn({ email, password }) {
  return fetch(`${URL}api/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}
