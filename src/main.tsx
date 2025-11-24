import '@telegram-apps/telegram-ui/dist/styles.css';
import { bindThemeParamsCssVars, init, themeParams } from '@telegram-apps/sdk-react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './app.scss'

init();
themeParams.mountSync();
bindThemeParamsCssVars();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
