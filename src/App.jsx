import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/searchbar'
import InputText from './components/InputText'
import LogInButton from './components/LogInButton'
import StartPage from './pages/StartPage'

import {Routes, Route} from 'react-router-dom';
import './App.css'
import Lock from '../src/assets/images/Lock.svg'
import Profile from '../src/assets/images/Profile.svg'


function App() {
  
  


  return (
    <>
     <InputText placeholderText="Username" placeholderIcon={Profile} />
     <InputText placeholderText="Password" placeholderIcon={Lock} />
     <LogInButton option="Sign in" />
     <LogInButton option="Log in" />
    </>


  return (
    <div>
       <Routes>
        <Route path="/" element={<StartPage userID = "1234" />}></Route>
        <Route path="/patient/:id" element={<SearchBar />}></Route>
        {/* <Route path="/caretaker/:id" element={<SearchBar />}></Route>
        <Route path="/caretaker/:add" element={<SearchBar />}></Route>
        <Route path="/patient/:id/puzzle" element={<SerachBar />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
