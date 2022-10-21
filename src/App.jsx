import React from 'react'
import { Routes, Route } from 'react-router-dom'
import usePathName from './hooks/usePathname'
import {
  Home,
  Product,
  SignIn,
  Register,
  CheckoutSuccess,
  Cart,
} from './pages/index'
import { Header, Drawer, Overlay } from './components/index'

function App() {
  const { location } = usePathName()
  return (
    <div className='App'>
      <Overlay />
      <Header />
      {location.pathname.replace(/\//g, '') !== 'cart' && <Drawer />}
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/products/:slug' element={<Product />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout_success' element={<CheckoutSuccess />} />
      </Routes>
    </div>
  )
}

export default App
