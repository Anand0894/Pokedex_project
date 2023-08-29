import axios from "axios"
import { useEffect, useState } from "react";
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";


function PokemonList() {
 
    const[ PokemonList , setPokemonList] = useState([]);
    const[ IsLoading , setIsLoading] = useState(false);
    const [Pokedex_url , setPokedex_url] = useState('https://pokeapi.co/api/v2/pokemon');
    const[nextUrl ,setnextUrl] = useState();
    const[prevUrl ,setprevUrl] = useState();
    


    async function downloadPokemons (){
        setIsLoading(true)
     const response = await axios.get(Pokedex_url); // downloading list of 20 pokemon
     const pokemonResult = response.data.results; // make array of 20 pokemon from the result
     console.log(response.data);
     setnextUrl(response.data.next);
     setprevUrl(response.data.previous)

       // iterating over the array of the pokemon , and using their url , to create their promises .
       // that will download those 20 pokemons. 
     
     const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));  

    // passing promises array to axios.all

     const pokemonData = await axios.all(pokemonResultPromise); // array 20 pokemons detailed data
     console.log(response.data)
    
     // now iterating of data of each pokemon and extract id,name, image,types  
    
     const res =  pokemonData.map((pokeData) => {
     const Pokemon = pokeData.data
     return({
                id : Pokemon.id ,
                name : Pokemon.name ,
                image : (Pokemon.sprites.other) ? Pokemon.sprites.other.dream_world.front_default : Pokemon.sprites.front_shiny ,
                types : Pokemon.type 
            })
        })
        console.log(res);
        setPokemonList(res);

        setIsLoading(false);
        }

     useEffect (()=> {
        downloadPokemons();
      },[Pokedex_url])  
    

  return (
    <div className="pokemon-list-wrapper">
    <div className="pikachu">

    {
        (IsLoading) ?  "loading... "  : 
        PokemonList.map((p) => <Pokemon name = {p.name} image = {p.image} key = {p.id} id = {p.id} />)
    }
    </div>
    <div >
        <button disabled={prevUrl == null} onClick={() => setPokedex_url(prevUrl)} className="buttons">Prev</button>
        <button disabled={nextUrl == null} onClick={() => setPokedex_url(nextUrl)}  className="buttons">Next</button>
    </div>
    </div>
    
  )
}
export default PokemonList