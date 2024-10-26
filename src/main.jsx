import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Star from './Star.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Star />
  </StrictMode>,
)
