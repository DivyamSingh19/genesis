 
import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import GenerationPage from './Pages/GenerationPage'
import Pricing from './Pages/Pricing'
import Home from './Pages/Home'
function App() {
 

  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/generation' element={<GenerationPage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
       </Routes>
    </div>
  )
}

export default App
