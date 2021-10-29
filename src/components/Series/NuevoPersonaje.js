import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class NuevoPersonaje extends Component {

    nomRef = React.createRef();
    imgRef = React.createRef();
    serRef = React.createRef();

    state = {
        series: [],
        status: false,
        statusper: false
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

    agregarPersonaje = (e) => {
        e.preventDefault();

        var nom = this.nomRef.current.value;
        var img = this.imgRef.current.value;
        var ser = parseInt(this.serRef.current.value);



        var personaje = {
            idPersonaje: 0,
            nombre: nom,
            imagen: img,
            idSerie: ser

        }



        var request = '/api/Personajes';
        var url = Global.urlseries + request;

        axios.post(url, personaje).then(res => {
            this.setState({
                statusper: true
            })
        });


    }

    componentDidMount = () => {
        this.cargarSeries();
    }
    render() {
        if (this.state.statusper == true) {
            return (<Redirect to={'/personajes/' + parseInt(this.serRef.current.value)}></Redirect>)
        }
        return (
            <div className='container'>
                <h1 className='m-4'>Agregar personaje</h1>
                <div className='bg-warning border border-dark'>
                    <form onSubmit={this.agregarPersonaje} style={{ width: '500px', margin: '0 auto', padding: '1em' }} >

                        <div className='mb-3 form-group row'>
                            <label>Introducir Nombre: </label>
                            <input type='text' className='form-control' ref={this.nomRef} />
                        </div>
                        <div className='mb-3 form-group row'>
                            <label>Imagen </label>
                            <input type='text' className='form-control' ref={this.imgRef} />
                        </div>
                        <div className='mb-3 form-group row'>
                            <label>Serie: </label>
                            <select className='form-control' ref={this.serRef}>
                                {this.state.series.map((ser, index) => {
                                    return (<option key={index} value={ser.idSerie}>{ser.nombre}</option>)
                                })}
                            </select>
                        </div>





                        <button className='btn btn-success m-4'>Agregar personaje</button>
                    </form>
                </div>
            </div>
        )
    }
}
