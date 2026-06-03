import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

const repoBasename = import.meta.env.MODE === 'production' ? '/Movie-Discovery' : '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={repoBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)