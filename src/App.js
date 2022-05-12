import './App.css';
import Home from './Components/Home'
import Pokedex from './Components/Pokedex'
import MyTeam from './Components/MyTeam'
import SinglePokemon from './Components/SinglePokemon';
import {Route, Link, Routes} from 'react-router-dom'
import {useState} from 'react'


function App() {

      const [pokemonTeam, setPokemonTeam] = useState([]) 

      const handleAddPokemonTeam = (name, image) => {
        const team = [...pokemonTeam];
        team.push({name, image});
        setPokemonTeam(team)
      }

      const handleRemovePokemonTeam = (object) => {
        const team = [...pokemonTeam];
        const newTeam = team.filter((pokemon) =>
        pokemon !== object);
        setPokemonTeam(newTeam);
      }

  return (
    <div className="">
      <header>
      <h1 className="logo">Pikapedia</h1>
      <nav>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/pokedex'><li>Pokedex</li></Link>
        <Link to='/myteam'><li>My Team</li></Link>
      </ul>
    </nav>
      </header>
      <main>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/pokedex' element={<Pokedex handleAddPokemonTeam={handleAddPokemonTeam} />} />
      <Route path='pokedex/:name' element={<Pokedex handleAddPokemonTeam={handleAddPokemonTeam}/>}/>
      <Route path='/myteam' element={<MyTeam pokemonTeam={pokemonTeam}
                                      handleRemovePokemonTeam=
                                      {handleRemovePokemonTeam} />} />
      
    </Routes>
      </main>
    </div>
  );
}

export default App;
