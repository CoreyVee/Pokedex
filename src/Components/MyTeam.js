import React  from "react";
import { useParams } from 'react-router';
import SinglePokemon from './SinglePokemon'

const MyTeam = ({pokemonTeam, handleRemovePokemonTeam}) => {

    const ShowTeam = pokemonTeam.map((pokemon, index) => {
      return (
        <div key={index}>
          <h2>Name:{pokemon.name}</h2>
          <img src={pokemon.image} alt=''/>
          <button onClick={() => handleRemovePokemonTeam(pokemon)}>Send to Pokebox</button>
        </div>
      );
    });

    return (
      <div>
        <h1>My Team</h1>
        <p>gotta catchem all</p>
        {ShowTeam}
      </div>
    );
}

export default MyTeam;