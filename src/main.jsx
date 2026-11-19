import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Home from './Component'
import Dashboard from './Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <Dashboard/>
  </StrictMode>,
)
