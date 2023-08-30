// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/header'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hello' element={<Header/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
