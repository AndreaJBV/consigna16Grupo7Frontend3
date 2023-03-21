import Contacto from "./Pages/Contacto"
import Home from "./Pages/Home"
import Beer from "./Pages/Beer"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router"

function App() {
  return (
   <div>
    <Navbar/>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/contacto' element = {<Contacto/>}/>
        <Route path= '/beer' element = {<Beer/>}/>
      </Routes>
   </div>
  )
}

export default App
