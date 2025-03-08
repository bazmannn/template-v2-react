import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import AppRoutes from './AppRoutes'
import { ThemeProvider } from "@/components/theme-provider"
import './i18n'; // Import i18n configuration

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

        <AppRoutes />

    </ThemeProvider>
  </StrictMode>,
)
