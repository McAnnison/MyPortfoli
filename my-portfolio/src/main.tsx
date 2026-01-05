import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
