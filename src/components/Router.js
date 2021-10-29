import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetallesSeries from './Series/DetallesSeries';

import MenuSeries from './Series/MenuSeries';
import NuevoPersonaje from './Series/NuevoPersonaje';
import Personajes from './Series/Personajes';
import ModificarPersonaje from './Series/ModificarPersonaje';
import Home from './Series/Home';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuSeries />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/detallesseries/:idSer'
                            render={props => {
                                var id = props.match.params.idSer;
                                return (<DetallesSeries idSer={id} />)
                            }}

                        />
                        <Route exact path='/personajes/:idSer'
                            render={props => {
                                var id = props.match.params.idSer;
                                return (<Personajes idSer={id} />)
                            }}
                        />
                        <Route exact path='/nuevopersonaje' component={NuevoPersonaje} />
                        <Route exact path='/modificarpersonaje' component={ModificarPersonaje} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
