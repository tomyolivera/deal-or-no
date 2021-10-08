import React from 'react'
import styled from 'styled-components'

const StyledPrecio = styled.div`
    background: linear-gradient(120deg, #a8a80e, white, #a8a80e);
    border:1px solid black;
    display: flex;
    justify-content: space-between;
    color: #000;
    padding: 8px 12px;
    margin-bottom: 20px;
    opacity: ${props => props.usado ? ".5" : ""};
    
    :hover{
        background: linear-gradient(60deg, #a8a80e, #ccc, #a8a80e);
    }
`

const Precios = ({ precios, start, end }) => {
    let newArr = [];

    for (let i = start; i < end; i++)
        newArr.push(precios[i]);

    return (
        <>
            {
                newArr.map((p, i) => (
                    <StyledPrecio key={i} usado={p.usado}>
                        $
                        <span>{ p.valor }</span>
                    </StyledPrecio>
                ))
            }
        </>
    )
}

export default Precios
