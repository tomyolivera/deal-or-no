import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Maletin from './Maletin'

const Maletines = ({ maletines, setMaletines, precios, setPrecios, primerMaletin, setPrimerMaletin, jugadasRestantes, setJugadasRestantes, cantMaletinesAbiertos, setCantMaletinesAbiertos, setDineroFinal }) => {
    const [ultimoMaletin, setUltimoMaletin] = useState({});

    const abrirMaletin = maletin => {
        if(!primerMaletin.precio)
            return !window.confirm(`Estás seguro de que el maletín numero ${maletin.numero + 1} será el que durará hasta el fin del juego?`)
                ? false
                : setPrimerMaletin(maletin);

        if(cantMaletinesAbiertos <= 24){
            if(primerMaletin.numero === maletin.numero)
                return false;
        }

        if(!window.confirm(`Estás seguro de que querés abrir el maletin numero: ${maletin.numero + 1}?`))
            return false;

        setCantMaletinesAbiertos(cantMaletinesAbiertos + 1);
        setJugadasRestantes(jugadasRestantes - 1);     

        let updateMaletin = maletines.find(m => m.numero === maletin.numero);
        updateMaletin.abierto = true;
        setMaletines([...maletines]);

        let precio = precios.find(p => p.valor === updateMaletin.precio);
        precio.usado = true;
        setPrecios([...precios]);

        if(cantMaletinesAbiertos >= 24){
            if(cantMaletinesAbiertos === 25)
                return setDineroFinal(maletin.precio);

            let a = maletines.filter(m => m.abierto === false);

            for (let i = 0; i < a.length; i++) {
                if(a[i] !== primerMaletin)
                    setUltimoMaletin(a[i]);
            }
        }
    }

    return (
        <Row>
            {
                cantMaletinesAbiertos <= 24
                ? maletines.map(({ numero, precio, abierto }, index) => (
                    <Col sm="2" lg="2" key={index}>
                        <Maletin abrirMaletin={abrirMaletin}
                                numero={numero}
                                precio={precio}
                                abierto={abierto}
                                primerMaletin={primerMaletin}
                                cantMaletinesAbiertos={cantMaletinesAbiertos}
                            />
                    </Col>
                ))
                : <Row>
                    <Col sm="6" lg="6">
                        <Maletin abrirMaletin={abrirMaletin}
                                numero={primerMaletin.numero}
                                precio={primerMaletin.precio}
                                abierto={primerMaletin.abierto}
                                primerMaletin={primerMaletin}
                                cantMaletinesAbiertos={cantMaletinesAbiertos}
                            />
                    </Col>

                    <Col sm="6" lg="6">
                        <Maletin abrirMaletin={abrirMaletin}
                                numero={ultimoMaletin.numero}
                                precio={ultimoMaletin.precio}
                                abierto={ultimoMaletin.abierto}
                                primerMaletin={primerMaletin}
                                cantMaletinesAbiertos={cantMaletinesAbiertos}
                            />
                    </Col>
                </Row>
            }
        </Row>
    )
}

export default Maletines