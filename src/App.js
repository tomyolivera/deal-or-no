import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Juego from './components/Juego';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/juego" exact component={Juego} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;