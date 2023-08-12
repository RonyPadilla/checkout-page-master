import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import Footer from './components/Footer.jsx'
import Checkot from './components/Checkot.jsx'
import { Products } from './components/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='content'>
      <Checkot/>
    <Products/>
    </section>
    
    <Footer/>
  </React.StrictMode>,
)
