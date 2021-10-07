import React from 'react'

function Boton({ backgroundColor, texto, onClick }){
    return (
        <button onClick={onClick} style={{ backgroundColor: backgroundColor }}>
            { texto }
        </button>
    )
}

export default Boton;