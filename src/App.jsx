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
  Profile,
  Order,
} from './pages/index'
import { Header, Drawer, Overlay, PrivateRoute } from './components/index'

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

        <Route
          path='/checkout_success'
          element={
            <PrivateRoute>
              <CheckoutSuccess />
            </PrivateRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/profile/order/:id'
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
