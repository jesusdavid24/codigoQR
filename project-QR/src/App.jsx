import { useState } from 'react'
import codigoQr from './assets/codigoQr.png'
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="container-card">
        <div className='card'>
          <img className='qr-img' src={codigoQr} alt="QR code" />
          <h1 className='title'>Improve your frontend skills by building projetcs</h1>
          <p className='text'>Scan the QR code to visit Frontend Mentor and take your coding skills to next level</p>
        </div>
      </div>
    </div>
  )
}

export default App
