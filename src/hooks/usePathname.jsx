import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Store from '../context/StoreContext'

export default function usePathName() {
  const { dispatch, ACTIONS } = useContext(Store)
  const [path, setPath] = useState('')

  const location = useLocation()

  useEffect(() => {
    setPath(location.pathname)
    dispatch({ type: ACTIONS.SHOW_CART, payload: false })
  }, [location.pathname])

  return { location, path }
}
