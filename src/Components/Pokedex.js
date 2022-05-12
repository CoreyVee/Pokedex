import React  from "react";
import { useParams } from 'react-router';
import { useState,useEffect } from "react";
import {Route, Link, Routes, Navigate} from 'react-router-dom'
import SinglePokemon from './SinglePokemon'


const Pokedex = ({handleAddPokemonTeam}) => {
    const[pokemonList, setPokemonList] = useState([]);
    const [toggle, setToggle] = useState(true);

//On page load, this will run our getPokemonList function which fetches data
useEffect (() =>{
getPokemonList()
}, [])

const getPokemonList = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

    fetch(url)
    .then((response) =>response.json())
    .then ((data) => setPokemonList(data.results))
    .catch(() => console.log('PokeAPI ran away...'))
}


const pokemonListed= pokemonList.map((pokemon, index) => (
            
            <li key={index}><Link onClick ={() => setToggle(!toggle)}  to={`/pokedex/${pokemon.name}`}>{pokemon.name} </Link></li>
           
        
    )
 )
console.log(pokemonList)

    return (
      <div className="PokedexPage">
        <h1 className="Pokedex">Pokedex</h1>
        <SinglePokemon toggle={toggle}
      handleAddPokemonTeam={handleAddPokemonTeam}/>
        <div className='PokemonList'>
        <ul>
        {pokemonListed}
        </ul>
        </div>
      </div>
    );
}

export default Pokedex;