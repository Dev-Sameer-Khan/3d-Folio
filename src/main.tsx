import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Cursor from './components/Cursor.tsx'
import { LoadingScreen } from './components/models/LoadingScreen.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cursor/>
    <LoadingScreen/>
    {/* <Menu/> */}
    <App />
  </StrictMode>,
)
