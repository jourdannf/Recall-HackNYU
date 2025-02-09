import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/searchbar'
import InputText from './components/InputText'
import LogInButton from './components/LogInButton'
import StartPage from './pages/StartPage'

import { useEffect } from 'react'

import {Routes, Route} from 'react-router-dom';
import './App.css'


function App() {
  
  useEffect(() => {
    fetch("")
  })


  return (
    <div>
       <Routes>
        <Route path="/" element={<StartPage role = "" />}></Route>
        <Route path="/patient/:id" element={<SearchBar />}></Route>
        {/* <Route path="/caretaker/:id" element={<SearchBar />}></Route>
        <Route path="/caretaker/:add" element={<SearchBar />}></Route>
        <Route path="/patient/:id/puzzle" element={<SerachBar />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
