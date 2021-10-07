import React from 'react'
import { Col, Row } from 'reactstrap'
import Maletin from './Maletin'

const Maletines = ({ maletines, setMaletines, precios, setPrecios, primerMaletin, setPrimerMaletin, jugadasRestantes, setJugadasRestantes }) => {
    const abrirMaletin = maletin => {
        if(!primerMaletin.numero)
            return !window.confirm(`Estás seguro de que el maletín numero ${maletin.numero + 1} será el que durará hasta el fin del juego?`)
                ? false
                : setPrimerMaletin(maletin);

        if(!window.confirm(`Estás seguro de que querés abrir el maletin numero: ${maletin.numero + 1}?`)) return false;

        setJugadasRestantes(jugadasRestantes - 1);

        let updateMaletin = maletines.find(m => m.numero === maletin.numero);
        updateMaletin.abierto = true;
        setMaletines([...maletines]);

        let precio = precios.find(p => p.valor === updateMaletin.precio);
        precio.usado = true;
        setPrecios([...precios]);

    }

    return (
        <Row>
            {
                maletines.map(({ numero, precio, abierto }, index) => (
                    <Col sm="2" lg="2" key={index}>
                        <Maletin abrirMaletin={abrirMaletin} numero={numero} precio={precio} abierto={abierto} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default Maletines