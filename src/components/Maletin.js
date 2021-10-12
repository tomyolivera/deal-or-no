import React from 'react'
import styled from 'styled-components';

const Numero = styled.span`
    position: absolute;
    margin-bottom:${props => props.abierto ? "50px" : "-15px" };
    color:${props => props.abierto ? "#fff" : "#fff" };
    background:${props => props.abierto ? "gray" : "" };
    padding:0 8px;
    font-size: 28px;
    font-weight: bold;
    align-self: center;
`

const Precio = styled.span`
    position: absolute;
    font-size: 20px;
    color: #fff;
    background:orange;
    margin-top:50px;
    padding:0 8px;
    font-weight: bold;
    align-self: center;
`

const MaletinStyled = styled.div`
    display:flex;
    justify-content: center;
    cursor: ${props => props.abierto ? "" : "pointer" };
    padding:10px;
`

const Maletin = ({ numero, precio, abierto, abrirMaletin, primerMaletin, cantMaletinesAbiertos }) => {
    const esPrimerMaletin = primerMaletin.numero === numero;

    const handleOpenMaletinClick = () => {
        if(primerMaletin.numero === numero){
            if(cantMaletinesAbiertos <= 24)
                return false;
        }


        if(abierto)
            return false;

        abrirMaletin({ numero, precio, abierto });
    }
    return (
        <MaletinStyled esPrimero={esPrimerMaletin} abierto={abierto} onClick={handleOpenMaletinClick}>
            <Numero abierto={abierto}>{ numero + 1 }</Numero>
            <Precio>{ abierto && <><span>$</span><span>{ precio }</span></> }</Precio>
            <img src={ abierto
                            ? "http://assets.stickpng.com/images/59bf81267a216d0b052f12e4.png"
                            : primerMaletin.numero === numero
                                ? "http://assets.stickpng.com/images/59bf815f7a216d0b052f12e9.png"
                                : "http://assets.stickpng.com/images/59bf81587a216d0b052f12e8.png"
                        }
                width="150px" />
        </MaletinStyled>
    )
}

export default Maletin