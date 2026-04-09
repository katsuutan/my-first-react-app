import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Sushi } from './Foodtest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sushi />
  </StrictMode>,
)
