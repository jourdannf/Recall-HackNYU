import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/searchbar'
import InputText from './components/InputText'
import LogInButton from './components/LogInButton'
import StartPage from './pages/StartPage'
import SignUpCaretakerPage from './pages/SignUpCaretaker'
import SignUpElderlyPage from './pages/SignUpElderlyPage'
import PuzzlePage from './pages/PuzzlePage'

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
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/signup" element={<SignUpCaretakerPage />}></Route>
        <Route path="/caretaker/patient/signup" element={<SignUpElderlyPage />}></Route>
        <Route path="/patient/puzzle" element={<PuzzlePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
