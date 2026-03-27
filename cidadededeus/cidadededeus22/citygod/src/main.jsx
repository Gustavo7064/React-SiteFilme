import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main.jsx — Ponto de entrada da aplicação React
import './style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
