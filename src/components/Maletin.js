import React from 'react'
import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap'

const Maletin = ({ numero, precio, abierto, abrirMaletin }) => {
    return (
        <Card color="dark" className="mb-3 text-light">
            <CardHeader>{ numero + 1 }</CardHeader>
            <CardBody>{ abierto && <><span>$</span> <span>{ precio }</span></> }</CardBody>
            <CardFooter>
                <Button onClick={() => abrirMaletin({ numero, precio, abierto })} color="primary" disabled={abierto}>
                    { abierto ? "Abierto" : "Abrir" }
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Maletin