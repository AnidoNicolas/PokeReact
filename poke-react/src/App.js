import React from 'react';
import './App.css';
import PokeInfo from './components/PokeInfo'
import PokeList from './components/PokeList';
function App() {
  return (
    <div className="App">
        <PokeInfo className="pokeInfo"></PokeInfo>
        <PokeList className="pokeList"></PokeList>
    </div>
  );
}

export default App;
