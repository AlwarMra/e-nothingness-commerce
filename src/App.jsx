import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Product } from './pages/index'
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
      </Routes>
    </div>
  )
}

export default App
