import './App.css'
import React from 'react'
import { Navbar, Welcome, Footer, Services, Transaction, Loader } from './components'
const App = () => {
  return (
    <div className='min-h-screen'>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        
      </div>
    </div>
  )
}

export default App
