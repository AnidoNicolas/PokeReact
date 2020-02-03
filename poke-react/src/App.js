import React from 'react';
import './App.css';
import PokeInfo from './components/PokeInfo'
import PokeList from './components/PokeList';
import PokeBanner from './components/PokeBanner'
function App() {
  return (
    <div className="App">
        <PokeBanner></PokeBanner>
        <PokeInfo className="pokeInfo"></PokeInfo>
    </div>
  );
}

export default App;
