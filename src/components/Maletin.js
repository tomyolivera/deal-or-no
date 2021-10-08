import React from 'react'
import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap'
import styled from 'styled-components';

const Numero = styled.span`
    position: absolute;
    color:#000;
    margin-bottom:${props => props.abierto ? "70px" : "" };
    font-size: 28px;
    font-weight: bold;
    align-self: center;
`

const Precio = styled.span`
    position: absolute;
    color:#000;
    font-size: 20px;
    margin-top:50px;
    font-weight: bold;
    align-self: center;
`

const MaletinStyled = styled.div`
    display:flex;
    justify-content: center;
    cursor: ${props => props.abierto ? "" : "pointer" };
    padding:10px;
    background:${props => props.esPrimero ? "orange" : "" };
`

const Maletin = ({ numero, precio, abierto, abrirMaletin, primerMaletin, cantMaletinesAbiertos }) => {
    const esPrimerMaletin = primerMaletin.numero === numero;

    const handleOpenMaletinClick = () => {
        if(abierto)
            return false;

        abrirMaletin({ numero, precio, abierto });
    }
    return (
        <MaletinStyled esPrimero={esPrimerMaletin} abierto={abierto} onClick={handleOpenMaletinClick}>
            <Numero abierto={abierto}>{ numero + 1 }</Numero>
            <Precio>{ abierto && <><span>$</span><span>{ precio }</span></> }</Precio>
            {
                abierto
                    ? <img width="150px" src="https://http2.mlstatic.com/D_NQ_NP_2X_835629-MLA47059324655_082021-F.webp" />
                    : <img width="150px" src="https://image.made-in-china.com/3f2j10jmLQTBlPEZce/Professional-High-Security-Lock-Custom-Briefcase-Aluminum-Tool-Box.webp" />
            }
        </MaletinStyled>
    )
}

export default Maletin