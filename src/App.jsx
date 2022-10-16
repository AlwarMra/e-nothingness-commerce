import React from 'react'
import { Routes, Route } from 'react-router-dom'
import usePathName from './hooks/usePathName'
import {
  Home,
  Product,
  SignIn,
  Register,
  CheckoutSuccess,
  CheckoutCancel,
} from './pages/index'
import { Header, Drawer, Overlay } from './components/index'

function App() {
  const { location } = usePathName()
  return (
    <div className='App'>
      <Overlay />
      <Header />
      <Drawer />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/products/:slug' element={<Product />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout_success' element={<CheckoutSuccess />} />
        <Route path='/checkout_cancel' element={<CheckoutCancel />} />
      </Routes>
    </div>
  )
}

export default App
