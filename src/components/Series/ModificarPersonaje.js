import React, { Component } from 'react';
import axios, { Axios } from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';


export default class ModificarPersonaje extends Component {
    state = {
        series: [],
        statuseries: false,
        personajes: [],
        statusper: false,
        statuscam: false,
    }

    perRef = React.createRef();
    serRef = React.createRef();


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

    cargarPersonajes = () => {
        var request = '/api/Personajes';
        var url = Global.urlseries + request;

        axios.get(url).then(res => {
            this.setState({
                personajes: res.data,
                statusper: true
            })
        });
    }

    modificarPersonaje = (e) => {
        e.preventDefault();


        var ser = parseInt(this.serRef.current.value);
        var per = parseInt(this.perRef.current.value);
        var request = '/api/Personajes/' + per + '/' + ser;
        var url = Global.urlseries + request;

        var personaje = {
            idPersonaje: per,
            nombre: "adas",
            imgen: 'asda',
            idSerie: ser
        }
        axios.put(url, personaje).then(res => {
            this.setState({
                statuscam: true
            })
        });



    }



    componentDidMount = () => {
        this.cargarSeries();
        this.cargarPersonajes();

    }


    render() {
        if (this.state.statuscam == true) {
            return (<Redirect to={'/detallesseries/' + this.serRef.current.value}></Redirect>)
        }
        return (
            <div className='container'>
                <h1 className='m-4'>Modificar personaje</h1>
                <div className='bg-warning border border-dark'>
                    <form onSubmit={this.modificarPersonaje} style={{ width: '500px', margin: '0 auto', padding: '1em' }} >

                        <div className='mb-3 form-group row'>
                            <label>Personajes: </label>
                            <select className='form-control' ref={this.perRef}>
                                {this.state.personajes.map((per, index) => {
                                    return (<option key={index} value={per.idPersonaje}>{per.nombre}</option>)
                                })}
                            </select>
                        </div>

                        <div className='mb-3 form-group row'>
                            <label>Series: </label>
                            <select className='form-control' ref={this.serRef}>
                                {this.state.series.map((ser, index) => {
                                    return (<option key={index} value={ser.idSerie}>{ser.nombre}</option>)
                                })}
                            </select>
                        </div>
                        <button className='btn btn-success m-4'>Modificar personaje</button>
                    </form>
                </div>
            </div>
        )
    }
}
