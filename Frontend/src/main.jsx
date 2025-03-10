import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import { SocketProvider } from './context/SocketContext.jsx'
createRoot(document.getElementById('root')).render(
    <Router>
    <AuthProvider>
    <SocketProvider>
    <App />
    </SocketProvider>
    </AuthProvider>
    </Router>
)
