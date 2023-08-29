
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'

import CustomRoutes from './Routes/CustomRoutes'

function App() {
  

  return (
    <div className="Outer">
   <BrowserRouter>

   <h1 id="pokemon-name">
   <Link to="/">Pokedex</Link>
   </h1>
   <CustomRoutes/>
     
   </BrowserRouter>
  
    </div>
  )
}

export default App
