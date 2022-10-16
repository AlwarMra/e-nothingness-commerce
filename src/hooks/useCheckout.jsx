import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Store from '../context/StoreContext'
import { createCheckoutSession } from '../services/checkout'

export default function useCheckout() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { dispatch, ACTIONS } = useContext(Store)
  function submitCheckout({ user, items }) {
    setLoading(true)
    if (!user) {
      dispatch({ type: ACTIONS.SHOW_CART, payload: false })
      return navigate('/signin?checkout=true')
    }

    const userInfo = { name: user.name, email: user.email, id: user.id }
    return createCheckoutSession({ items, userInfo }).then(res => {
      console.log(res)
      window.location.href = res.url
    })
  }
  return { submitCheckout, loading }
}
