import React from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Routes,Route } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailsScreen from './Screens/ContactDetailsScreen/ContactDetailsScreen'

function App() {

  return (
    <div>
      <Routes>
        <Route
          path= '/'
          element = {<HomeScreen/>}
        />
        <Route
          path= '/contacts'
          element = {<ContactScreen/>}
        />
        <Route
          path= '/contact-details'
          element = {<ContactDetailsScreen/>}
        />
      </Routes>
    </div>
  )
}

export default App
