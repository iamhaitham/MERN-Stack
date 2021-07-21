import React,{useState,useEffect} from 'react'

const Pokemon = (props) => {
    const [pokemons,setPokemons]=useState([]);

    const handleClick=(e)=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response=>response.json())
        .then(response=>setPokemons(response.results))
        .catch(error=>console.error("You have an error and it is like this: "+error));
    }

    return (
        <div>
            <button onClick={(e)=>handleClick(e)}>Fetch Pokemon</button> 
            {pokemons.map((pokemon,index)=><div key={index}>{pokemon.name}</div>)}
        </div>
    )
}

export default Pokemon
