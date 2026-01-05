import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from "./Pages/Register/Register"
import DataFormPage from './Pages/Datafilling/Datafilling'
import ProfilePage from './Pages/Profile/Profile'
import SettingsPage from './Pages/Settings/Settings'
import ServicesPage from './Pages/Service/Service'
const App = () => {
  return (
    <div>
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/datafilling' element={<DataFormPage/>} />
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
          <Route path='/service' element={<ServicesPage/>}/>
        </Routes>
      </BrowserRouter>
      </>
    </div>
  )
}

export default App