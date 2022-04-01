import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Pokemon from './componentes/Pokemon/Pokemon';

function App() {
  const [termino,setTermino]=useState('');
  const [Pokemones , setPokemones]=useState([]);

  const mostrarPokemon =(event) =>{
    event.preventDefault();
    let termino = 807;
    setTermino((PrevTermino)=>termino)
  }
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${termino}`)
    .then(respuesta=>{
      setPokemones((noticiaPrev)=> respuesta.data.results)
    })
    .catch(err=>{
      console.log(err);
    })
  },[termino])
  

  return (
    <div className="pagina">
       <form onSubmit={(event)=> mostrarPokemon(event)}>
          <button type='submit'>
            Fetch Pokemon
          </button>
        </form>
        <div>
          {
            Pokemones.map((pokemon,indice)=>{
              return (<Pokemon pokemon={pokemon} key={'pokemon_'+indice}/>)
            })
          }
        </div>
    </div>
  );
}

export default App;
