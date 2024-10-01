import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css"
import"slick-carousel/slick/slick-theme.css"
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  {/*  */}
  </StrictMode>,
)
