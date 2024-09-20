import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavigationBar from './navbar.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationBar />
    <App />
  </StrictMode>,
)
