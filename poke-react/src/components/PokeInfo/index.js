import React from 'react';
import './styles.css';
import PokeNombre from './PokeNombre';
import PokeTipo from './PokeTipo';
import PokeList from './../PokeList';
const PokeInfo =(props)=>{
    return(
        <div className="pokeInfoContainer">
            <PokeList></PokeList>
            <PokeNombre nombre="Bulbasaur"/>
            <PokeTipo tipo="Hierba"/>
        </div> 
    )
}

export default PokeInfo;