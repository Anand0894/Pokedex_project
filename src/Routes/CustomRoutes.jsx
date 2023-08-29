import { Routes  , Route } from "react-router-dom"
import PokemonDetails from "../Component/PokemonDetails/PokemonDetails"
import Pokedex from "../Component/Pokedex/Pokedex"


 function CustomRoutes() {
  return (
    

    <Routes>
        <Route path = "/" element = {<Pokedex/>} />
        <Route path = "/pokemon/:id" element = {<PokemonDetails/>}/>

        
    </Routes>
    
  )
}
export default CustomRoutes