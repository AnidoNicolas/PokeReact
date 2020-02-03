import React from 'react';
import './styles.css';
import PokeNombre from './PokeNombre';
import PokeTipo from './PokeTipo';
const PokeInfo =(props)=>{
    return(
        <div className="pokeInfoContainer">
            <PokeNombre nombre="Bulbasaur" className/>
            <PokeTipo tipo="Hierba"/>
        </div> 
    )
}

export default PokeInfo;