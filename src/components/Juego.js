import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap';

import Maletines from './Maletines';
import Precios from './Precios';
import ModalOferta from './ModalOferta';

import { calcularOferta, getRandom, searchInArray } from '../global/helpers';
import JuegoTerminado from './JuegoTerminado';

function Juego() {
    const [maletines, setMaletines] = useState([]);
    const [cantMaletinesAbiertos, setCantMaletinesAbiertos] = useState(1);
    const [precios, setPrecios] = useState([
        { numero: 0, valor: 1, usado: false },
        { numero: 1, valor: 5, usado: false },
        { numero: 2, valor: 10, usado: false },
        { numero: 3, valor: 15, usado: false },
        { numero: 4, valor: 25, usado: false },
        { numero: 5, valor: 50, usado: false },
        { numero: 6, valor: 75, usado: false },
        { numero: 7, valor: 100, usado: false },
        { numero: 8, valor: 200, usado: false },
        { numero: 9, valor: 300, usado: false },
        { numero: 10, valor: 400, usado: false },
        { numero: 11, valor: 500, usado: false },
        { numero: 12, valor: 750, usado: false },
        { numero: 13, valor: 1000, usado: false },
        { numero: 14, valor: 5000, usado: false },
        { numero: 15, valor: 10000, usado: false },
        { numero: 16, valor: 25000, usado: false },
        { numero: 17, valor: 50000, usado: false },
        { numero: 18, valor: 75000, usado: false },
        { numero: 19, valor: 100000, usado: false },
        { numero: 20, valor: 200000, usado: false },
        { numero: 21, valor: 300000, usado: false },
        { numero: 22, valor: 400000, usado: false },
        { numero: 23, valor: 500000, usado: false },
        { numero: 24, valor: 750000, usado: false },
        { numero: 25, valor: 1000000, usado: false },
    ]);
    const [primerMaletin, setPrimerMaletin] = useState({});
    const [preciosUsados] = useState([]);
    const [jugadasRestantes, setJugadasRestantes] = useState(7);
    const [ultimaJugadaRestante, setUltimaJugadaRestante] = useState(7);
    const [oferta, setOferta] = useState(0);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [dineroFinal, setDineroFinal] = useState(0);
    
    useEffect(() => {
        if(jugadasRestantes > 1)
            return false;

        calcularOferta(maletines, setOferta, toggle)
        setJugadasRestantes(ultimaJugadaRestante - 1);
        setUltimaJugadaRestante(ultimaJugadaRestante - 1);
    }, [jugadasRestantes])

    useEffect(() => {        
        for (let i = 0; i < precios.length; i++) {
            let rnd = getRandom(precios.length);

            while (searchInArray(precios[rnd].valor, preciosUsados))
                rnd = getRandom(precios.length);

            preciosUsados.push(precios[rnd].valor);
            maletines.push({ numero: i, precio: precios[rnd].valor, abierto: false })
        }

        setLoading(false);
    }, [])

    const toggle = () => setModal(!modal);

    const handleAcceptOferta = () => {
        if(!window.confirm(`Estás seguro que querés aceptar la oferta de $${oferta}?`))
            return false;

        setDineroFinal(oferta);
    }
       

    return (
        <div className="px-3">
            {
                dineroFinal > 0
                ? <JuegoTerminado dineroFinal={dineroFinal} />
                : <>
                    {
                        oferta > 0 && <ModalOferta modal={modal}
                                                toggle={toggle}
                                                oferta={oferta}
                                                setDineroFinal={setDineroFinal}
                                                handleAcceptOferta={handleAcceptOferta}
                                            />
                    }

                    <h1 className="text-center">Elige { cantMaletinesAbiertos >= 24 ? "el ultimo" : "un" } maletin</h1>
                    { cantMaletinesAbiertos < 24 && <h3 className="text-center">Jugadas restantes antes de la oferta: { jugadasRestantes >= 1 ? jugadasRestantes : 1 }</h3> }

                    <Row>
                        <Col sm="12" lg="2"> <Precios precios={precios} start={0} end={precios.length / 2 } /> </Col>

                        <Col sm="12" lg="8" className="d-flex">
                            {
                                !loading &&
                                    <Maletines  maletines={maletines}
                                                setMaletines={setMaletines}
                                                precios={precios}
                                                setPrecios={setPrecios}
                                                primerMaletin={primerMaletin}
                                                setPrimerMaletin={setPrimerMaletin}
                                                jugadasRestantes={jugadasRestantes}
                                                setJugadasRestantes={setJugadasRestantes}
                                                cantMaletinesAbiertos={cantMaletinesAbiertos}
                                                setCantMaletinesAbiertos={setCantMaletinesAbiertos}
                                                setDineroFinal={setDineroFinal}
                                            />
                            }
                        </Col>

                        <Col sm="12" lg="2"> <Precios precios={precios} start={precios.length / 2} end={precios.length } /> </Col>
                    </Row>
                </>
            }

        </div>
    )
}

export default Juego;