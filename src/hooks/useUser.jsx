import { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Store from '../context/StoreContext'
import signIn from '../services/signIn.js'
import register from '../services/register.js'
import useCheckout from './useCheckout'

export default function useUser() {
  const NAVIGATE_TO = '/'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { state, dispatch, ACTIONS } = useContext(Store)
  const navigate = useNavigate()
  const { submitCheckout } = useCheckout()

  const submitUser = useCallback(
    async ({ email, password, name, isSigning = true, checkout = false }) => {
      const userAction = isSigning ? signIn : register
      setError(false)
      setLoading(true)

      setTimeout(() => {
        userAction({ email, password, name }).then(res => {
          if (res.err) return setError(res.message)
          dispatch({
            type: ACTIONS.SIGN_IN,
            payload: res,
          })
          return checkout
            ? submitCheckout({
                user: res,
                items: state.cart.cartItems,
              })
            : navigate(NAVIGATE_TO)
        })

        setLoading(false)
      }, 1000)
    },
    [state.user],
  )

  useEffect(() => {
    if (state?.user) {
      navigate(NAVIGATE_TO)
    }
  }, [])

  return {
    error,
    loading,
    submitUser,
  }
}
