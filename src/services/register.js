import { URL } from './settings'

export default function registerUser({ email, password, name }) {
  return fetch(`${URL}api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
}
