import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./PokemonDetails.css"

function PokemonDetails() {

  const {id} = useParams();
  const [pokemon , setpokemon] = useState({});
  async function downloadpokemon (){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setpokemon({
      name : response.data.name,
      image : response.data.sprites.other.dream_world.front_default,
      height : response.data.height,
      weight : response.data.weight,
      types : response.data.types.map((t) => t.type.name)
    })
  }
  useEffect ( () => {
    downloadpokemon();
  },[]);

  return (
    <div className="pokemon-details-wrapper">
      <img src={pokemon.image} alt="/" className="pokemonk-image" />
      <div className="pokemon-name1"> <span > {pokemon.name}</span></div>
      <div className="pokemon-name1"> Height : {pokemon.height}</div>
      <div className="pokemon-name1"> Weight : {pokemon.weight}</div>
      <div className="pokemon-type">
        {pokemon.types && pokemon.types.map((t) => <div key = {t}>{t}</div>)}
      </div>
    </div>
  )
}
export default PokemonDetails