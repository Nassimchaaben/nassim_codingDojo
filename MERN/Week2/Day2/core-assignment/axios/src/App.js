
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [pokemon,setPokemon] = useState([]);
  const fetching = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  
  .then(response =>{
    setPokemon(response.data.results);
}).catch(err => {
      console.log(err);
  })
  console.log(pokemon);
}
  return (
    <div className="App">
     <button onClick={fetching}>Fetch</button>
      
      {pokemon.map((poki,i)=>{
        return  <li key={i}>{poki.name}</li>  
      })
        
      }
    </div>
  );
}

export default App;
