import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/searchbar'
import InputText from './components/InputText'
import LogInButton from './components/LogInButton'
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
  )
}

export default App
