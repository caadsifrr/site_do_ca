import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './themes/index.css'
import App from './screens/App/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
