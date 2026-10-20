import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CONSTANT from './common/constant'
import About from './components/About'
import Support from './components/Support'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Login from './components/LoginForm'
import Signup from './components/SignupForm'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return <div>

    <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />

    <Routes>
      <Route path={CONSTANT.ROUTES.HOME} element={<Home />}></Route>
      <Route path={CONSTANT.ROUTES.DASHABORD} element={<Dashboard />}></Route>
      <Route path={CONSTANT.ROUTES.ABOUT} element={<About />}></Route>
      <Route path={CONSTANT.ROUTES.SUPPORT} element={<Support />}></Route>
      <Route path={CONSTANT.ROUTES.CONTACT} element={<Contact />}></Route>
      <Route path={CONSTANT.ROUTES.LOGIN} element={<Login />}></Route>
      <Route path={CONSTANT.ROUTES.SINGUP} element={<Signup />}></Route>
    </Routes>
  </div >
}

export default App
