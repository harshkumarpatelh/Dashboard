import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CONSTANT from './common/constant'
import About from './components/About'
import Support from './components/Support'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
import Login from './components/Login'
import Singup from './components/Singup'
// update -> dispatch
// read -> useSelector

function App() {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // function incrementHandler() {
  //   dispatch(increment({}));
  // }
  // function b() {
  //   dispatch(customIncrement({ harsh: 10 }))
  // }
  // console.log("State :::", state)




  return <div>

    <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
    {/* <button onClick={incrementHandler}>Increment</button>
    <button onClick={b}>Custom Increment</button> */}


    <Routes>
      <Route path={CONSTANT.ROUTES.HOME} element={<Home />}></Route>
      <Route path={CONSTANT.ROUTES.DASHABORD} element={<Dashboard />}></Route>
      <Route path={CONSTANT.ROUTES.ABOUT} element={<About />}></Route>
      <Route path={CONSTANT.ROUTES.SUPPORT} element={<Support />}></Route>
      <Route path={CONSTANT.ROUTES.CONTACT} element={<Contact />}></Route>
      <Route path={CONSTANT.ROUTES.LOGIN} element={<Login setisLoggedIn={setisLoggedIn} />}></Route>
      <Route path={CONSTANT.ROUTES.SINGUP} element={<Singup setisLoggedIn={setisLoggedIn} />}></Route>
    </Routes>


  </div >
}

export default App
