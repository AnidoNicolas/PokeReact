import React from 'react';
import "./styles.css";
const PokeNombre=(props)=>{
    return(
        <div className="pokeNombreContainer">
            <span>{`Nombre Pokemon: ${props.nombre}`}</span>    
        </div>
        
    );
}

export default PokeNombre;