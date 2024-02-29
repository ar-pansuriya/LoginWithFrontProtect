import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile';
import AuthMiddle from './hooks/AuthMiddle';




function App() {


  return (
    <>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route element={<AuthMiddle/>}>
      <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App




