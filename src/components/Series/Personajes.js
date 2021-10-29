import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class Personajes extends Component {

    state = {
        personajes: [],
        status: false
    }
    cargarPersonajes = () => {
        var request = '/api/Series/PersonajesSerie/' + this.props.idSer;
        var url = Global.urlseries + request;

        axios.get(url).then(res => {
            this.setState({
                personajes: res.data,
                status: true
            })
        });
    }

    componentDidMount = () => {
        this.cargarPersonajes();
    }

    render() {
        return (
            <div className='container mt-5'>
                <NavLink className='btn btn-danger mb-3' to={'/detallesseries/' + this.props.idSer}>Volver</NavLink>
                <table className='table table-dark table-striped '>
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Imagen
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.personajes.map((per, index) => {
                            return (<tr key={index}>
                                <td>{per.nombre}</td>
                                <td><img width='auto' height='200px' src={per.imagen} /></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
