import React  from "react";
import { useParams } from 'react-router';
import {useEffect, useState} from 'react';

const SinglePokemon = ({toggle, handleAddPokemonTeam}) => {
      const [soloPokemon, setSoloPokemon] = useState({
        sprites:{}
      })
      const [soloPokemonFlavor, setSoloPokemonFlavor] = useState({
        genus:{}
      })
  let params = useParams()

  useEffect (() =>{
    getSinglePokemon()
    getSinglePokemonFlavor()
  }, [toggle])

  const getSinglePokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`;

    fetch(url)
      .then ((response) => response.json())
      .then ((data) => setSoloPokemon(data))
      .catch (() => console.log('It ran away...'))
  }
  const getSinglePokemonFlavor = () => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${params.name}/`;

    fetch(url)
      .then ((response) => response.json())
      .then ((data) => setSoloPokemonFlavor(data))
      .catch (() => console.log('It ran away...'))
  }
  console.log(soloPokemon)
  console.log(soloPokemonFlavor)
    return (
      <div id="pokedex">
  <div id="left">
    <div id="logo"></div>
    <div id="bg_curve1_left"></div>
    <div id="bg_curve2_left"></div>
    <div id="curve1_left">
      <div id="buttonGlass">
        <div id="reflect"> </div>
      </div>
      <div id="miniButtonGlass1"></div>
      <div id="miniButtonGlass2"></div>
      <div id="miniButtonGlass3"></div>
    </div>
    <div id="curve2_left">
      <div id="junction">
        <div id="junction1"></div>
        <div id="junction2"></div>
      </div>
    </div>
    <div id="screen">
      <div id="topPicture">
        <div id="buttontopPicture1"></div>
        <div id="buttontopPicture2"></div>
      </div>
      <div id="picture">
      <img src={soloPokemon?.sprites?.front_default} alt={soloPokemon.name} height="170" />
      </div>
      <div id="buttonbottomPicture"></div>
      <div id="speakers">
        <div class="sp"></div>
        <div class="sp"></div>
        <div class="sp"></div>
        <div class="sp"></div>
      </div>
    </div>
    <div id="bigbluebutton"></div>
    <div id="barbutton1"></div>
    <div id="barbutton2"></div>
    <div id="cross">
      <div id="leftcross">
        <div id="leftT"></div>
      </div>
      <div id="topcross">
        <div id="upT"></div>
      </div>
      <div id="rightcross">
        <div id="rightT"></div>
      </div>
      <div id="midcross">
        <div id="midCircle"></div>
      </div>
      <div id="botcross">
        <div id="downT"></div>
      </div>
    </div>
  </div>
  <div id="right">
    <div id="stats">
      <strong>Name:</strong> {soloPokemon.name} <br/>
      <strong>Type:{" "}</strong> 
          {soloPokemon.types && soloPokemon.types[0]
           ? soloPokemon.types[0].type.name
           : ''}{' '}
           {soloPokemon.types && soloPokemon.types[1]
           ? soloPokemon.types[1].type.name
         : ''}<br/>
      <strong>Height:</strong>{soloPokemon.height}<br/>
      <strong>Weight:</strong>{soloPokemon.weight} lbs<br/><br/>
      <strong>Type:{''}{soloPokemonFlavor.genera && soloPokemonFlavor.genera[0] ? soloPokemonFlavor.genera[0].genus :''}</strong><br/>
      Type:{''}{soloPokemonFlavor.genera && soloPokemonFlavor.flavor_text_entries[0] ? soloPokemonFlavor.flavor_text_entries[0].flavor_text :''}
    </div>
    <div id="blueButtons1">
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
    </div>
    <div id="blueButtons2">
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
    </div>
    <div id="miniButtonGlass4"></div>
    <div id="miniButtonGlass5"></div>
    <div id="barbutton3"></div>
    <div id="barbutton4"></div>
    <div id="yellowBox1"></div>
    <div id="yellowBox2"></div>
    <div id="bg_curve1_right"></div>
    <div id="bg_curve2_right"></div>
    <div id="curve1_right"></div>
    <div id="curve2_right"></div>
  </div>
</div>
     
    );
}

export default SinglePokemon;