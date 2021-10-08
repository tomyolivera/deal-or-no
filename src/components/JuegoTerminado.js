import React from 'react'
import { useHistory } from 'react-router'
import { Button, Container } from 'reactstrap'

const JuegoTerminado = ({ dineroFinal }) => {
    const history = useHistory();

    return (
        <Container className="text-center">
            <div>
                <h2>Felicitaciones, terminaste el juego!</h2>
                <h4>Premio final de</h4>
                <h1>${ dineroFinal }</h1>


                <Button color="primary" onClick={() => { history.push('/') }}>Volver a Jugar</Button>
            </div>


            <img className="mt-3" src="https://c.tenor.com/kuynBCCWpXQAAAAd/fuegos-artificiales.gif" />
        </Container>
    )
}

export default JuegoTerminado
