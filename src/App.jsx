import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Product, SignIn, Register } from './pages/index'
import { Header, Drawer, Overlay } from './components/index'

function App() {
  return (
    <div className='App'>
      <Overlay />
      <Header />
      <Drawer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:slug' element={<Product />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
