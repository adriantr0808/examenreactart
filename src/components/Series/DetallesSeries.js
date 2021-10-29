import axios from 'axios';
import React, { Component } from 'react';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class DetallesSeries extends Component {

    state = {
        serie: [],
        status: false
    }

    cargarSerie = () => {
        var id = this.props.idSer;
        var request = '/api/Series/' + id;
        var url = Global.urlseries + request;
        axios.get(url).then(res => {
            this.setState({
                serie: res.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarSerie();
    }

    componentDidUpdate = (oldprops) => {
        if (this.props.idSer != oldprops.idSer) {
            this.cargarSerie();
        }
    }
    render() {



        return (
            <div className='m-5'>
                <div className="card">
                    <div className="card-header">
                        {this.state.serie.nombre}
                    </div>
                    <img width='150px' style={{ margin: 'auto' }} src={this.state.serie.imagen} />
                    <div className="card-body">
                        <h5 className="card-title">Puntuación: {this.state.serie.puntuacion}</h5>
                        <p className="card-text">Año: {this.state.serie.anyo}</p>
                        <NavLink className='btn btn-danger' to={'/personajes/' + this.state.serie.idSerie}>Personajes</NavLink>
                    </div>

                </div>
            </div>
        )
    }
}
