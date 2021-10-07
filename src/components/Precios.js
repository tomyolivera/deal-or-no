import React from 'react'
import styled from 'styled-components'

// #a8a80e

const StyledPrecio = styled.div`
    /* background: linear-gradient(120deg, yellow, gray, yellow); */
    border:1px solid black;
    display: flex;
    justify-content: space-between;
    color: #000;
    padding: 8px 12px;
    margin-bottom: 20px;
    
    :hover{
        /* background: linear-gradient(60deg, yellow, gray, yellow); */
    }

    .disabled{
        background: #000;
        opacity: 0.25;
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
                    <StyledPrecio key={i} className={` ${p.usado ? "bg-danger" : ""} `}>
                        $
                        <span>{ p.valor }</span>
                    </StyledPrecio>
                ))
            }
        </>
    )
}

export default Precios
