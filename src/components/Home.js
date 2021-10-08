import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from 'reactstrap';
import styled from 'styled-components';

const Button = styled.div`
    cursor: pointer;
    background: #000;
    color: #fff;
    border-radius: 12px;
    padding: 8px 12px;
    width: fit-content;
    box-shadow: 0 0 16px orange;
    transition: all .3s;

    :hover{
        box-shadow: 0 0 32px orange;
    }
`

const Home = () => {
    const history = useHistory();

    return (
        <Container>
            <h3>¿Cómo se juega?</h3>
            <p>
                El juego consta de un número de maletines (26) que representan diversas cantidades de dinero. Sin saber qué cantidad corresponde a cada maletín, el concursante elige uno, en el cual supone que contiene el premio máximo. Dicho Maletín permanecerá cerrado hasta el final del juego.

                Luego, el participante tendrá la opción de descartar 6 maletines para recibir la primera oferta de la banca (el precio de la oferta deberá ser apenas inferior al promedio de los importes en los maletines no descartados).

                El concursante puede aceptar la oferta o seguir abriendo maletines.

                Luego el juego dará la opción a descartar, 5 maletines, 4, 3, 2 y 1 maletines sucesivamente hasta que quede 1 disponible + el elegido por el concursante. (siempre con la oferta de la Banca de por medio).

                Como ambos (el concursante y la banca) desconocen el valor de su maletín, puede que el concursante haga muy buen negocio al vender a un buen precio un maletín que puede contener cifras mínimas ($1) o uno muy malo si contiene cifras máximas ($1.000.000).

                Si opta por seguir abriendo maletines y estos corresponden a cifras menores, aumentará el valor de la oferta de la banca, caso contrario disminuirá.

                El objetivo final de la partida para el usuario es quedarse con la cifra más alta posible.
            </p>

            <Button onClick={() => history.push('/juego')}>
                Empezar a Jugar!
            </Button>
        </Container>
    )
}

export default Home
