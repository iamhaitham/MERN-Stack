import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [pokemons,setPokemons]=useState([]); 

    const fetchPokemons=(e)=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then((response)=>setPokemons(response.data.results))
        .catch((error)=>console.error(error))
    }

    return (
        <>
            <div>
                <button onClick={(e)=>fetchPokemons(e)}>Fetch Pokemon</button>
            </div>

            <div>
                {pokemons.map((pokemon,index)=><li key={index}>{pokemon.name}</li>)}
            </div>
        </>
    )
}

export default Pokemon
