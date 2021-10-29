import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';

export default class MenuSeries extends Component {

    state = {
        series: [],
        status: false
    }

    cargarSeries = () => {
        var request = '/api/Series';

        var url = Global.urlseries + request;

        axios.get(url).then(res => {
            // console.log(res.data);
            this.setState({
                series: res.data,
                status: true
            })
        });
    }

    componentDidMount = () => {
        this.cargarSeries();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Series</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className='nav-link' to={'/nuevopersonaje'}>Nuevo personaje</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to={'/modificarpersonaje'}>Modificar personaje</NavLink>
                                </li>s
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Series
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {this.state.series.map((ser, index) => {
                                            return (<li key={index}><NavLink className="dropdown-item nav-link-dark" to={'/detallesseries/' + ser.idSerie}>{ser.nombre}</NavLink></li>)
                                        })}
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
