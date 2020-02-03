import React from 'react';
import './styles.css';

const PokeTipo=(props)=>{
    return (
        <div className="pokeTipoContainer">
            <span>{`Tipo: ${props.tipo}`}</span>
        </div>
        
    );
}

export default PokeTipo;