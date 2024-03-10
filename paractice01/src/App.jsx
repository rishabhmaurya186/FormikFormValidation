
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'


function App() {


  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<SignUpForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>

      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
