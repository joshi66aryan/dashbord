import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import { DarkModeContextProvider } from './context/darkModeContext'
import { AuthContextProvider } from './context/authContext'

createRoot(document.getElementById('root')).render(
    <DarkModeContextProvider>
        <AuthContextProvider>
          <App />,
        </AuthContextProvider>  
    </DarkModeContextProvider>
)
