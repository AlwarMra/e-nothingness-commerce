import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Store from '../context/StoreContext'

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store)
  const { user } = state
  return user ? children : <Navigate to='/signin' />
}
