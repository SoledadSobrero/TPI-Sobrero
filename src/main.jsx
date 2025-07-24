import React from 'react'
import { createRoot } from 'react-dom/client'
import MessagesContextProvider from './Context/MessageContext.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContactContextProvider from './Context/ContactContex.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContactContextProvider>
            <MessagesContextProvider>
                <App />
            </MessagesContextProvider>
        </ContactContextProvider>
    </BrowserRouter>
)
