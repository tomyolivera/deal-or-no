import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Maletines from './components/Maletines';
import { getRandom, searchInArray } from './global/helpers';
import Precios from './components/Precios';

function App() {
    const [maletines, setMaletines] = useState([]);
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
    const [jugadasRestantes, setJugadasRestantes] = useState(6);
    const [oferta, setOferta] = useState(0);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    useEffect(() => {
        if(jugadasRestantes > 0) return false;

        let preciosDeMaletinesSinAbrir = [];

        maletines.forEach(({ precio, abierto }) => {
            if(!abierto) preciosDeMaletinesSinAbrir.push(precio)
        });

        let suma = 0;

        for (let i = 0; i < preciosDeMaletinesSinAbrir.length; i++)
            suma += preciosDeMaletinesSinAbrir[i];

        let promedio = suma / preciosDeMaletinesSinAbrir.length;

        setOferta(promedio * 0.15);
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

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <h1>Jugadas restantes antes de la oferta: { jugadasRestantes }</h1>
            <Row>
                <Col sm="2">
                    <Precios precios={precios} start={0} end={precios.length / 2 } />
                </Col>

                <Col sm="8" className="d-flex">
                    {
                        !loading && <Maletines  maletines={maletines}
                                                setMaletines={setMaletines}
                                                precios={precios}
                                                setPrecios={setPrecios}
                                                primerMaletin={primerMaletin}
                                                setPrimerMaletin={setPrimerMaletin}
                                                jugadasRestantes={jugadasRestantes}
                                                setJugadasRestantes={setJugadasRestantes}
                                            />
                    }
                </Col>

                <Col sm="2">
                    <Precios precios={precios} start={precios.length / 2 + 1} end={precios.length } />
                </Col>
            </Row>
        </>
    )
}

export default App;