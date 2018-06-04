import * as React from 'react';
import { IRouter, Link } from 'react-router';
import { IAlumno, ITest, IRouterContext } from '../../types';
import { url, submitForm } from '../../util';
import { Input, Row } from '../../../node_modules/react-materialize';
import * as $ from '../../../node_modules/jquery';

interface IFiltrarFormularioPageProps {
}

interface IFiltrarFormularioPageState {
  filtros?: number;
}


export default class FiltrarFormularioPage extends React.Component<IFiltrarFormularioPageProps, IFiltrarFormularioPageState> {
  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleOnClickCarrera = this.handleOnClickCarrera.bind(this);
    this.handleOnClickEnfermedad = this.handleOnClickEnfermedad.bind(this);
    this.handleOnClickDeporte = this.handleOnClickDeporte.bind(this);
    this.handleOnClickApoyo = this.handleOnClickApoyo.bind(this);
    this.state = {
      filtros: 0
    };
  }

  onSubmit(event) {
    let carrera = document.getElementById('carreraselect').value;
    let enfermedad = document.getElementById('enfermedadselect').value;
    let deporte = document.getElementById('deporteselect').value;
    let apoyo = document.getElementById('apoyoselect').value;
    console.log('carrera:' + carrera);
    console.log('enfermedad:' + enfermedad);
    console.log('deporte:' + deporte);
    console.log('apoyo:' + apoyo);

    console.log('filtros:' + this.state.filtros);

    if (this.state.filtros === 1) {
      if (carrera !== '') {
        this.context.router.push({
          pathname: '/formulario/carrera/' + carrera
        });
      } else if (enfermedad !== '') {
        this.context.router.push({
          pathname: '/formulario/enfermedad/' + enfermedad
        });
      } else if (deporte !== '') {
        this.context.router.push({
          pathname: '/formulario/deporte/' + deporte
        });
      } else if (apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/apoyo/' + apoyo
        });
      } else {
        console.log('Selecciona!');
        alert('Seleccione un valor');
      }

    } else if (this.state.filtros === 2) {
      if (carrera !== '' && enfermedad !== '') {
        this.context.router.push({
          pathname: '/formulario/carrera/' + carrera + '/enfermedad/' + enfermedad
        });
      } else if (carrera !== '' && deporte !== '') {
        this.context.router.push({
          pathname: '/formulario/carrera/' + carrera + '/deporte/' + deporte
        });
      } else if (carrera !== '' && apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/carrera/' + carrera + '/apoyo/' + apoyo
        });
      } else if (enfermedad !== '' && deporte !== '') {
        this.context.router.push({
          pathname: '/formulario/enfermedad/' + enfermedad + '/deporte/' + deporte
        });
      } else if (enfermedad !== '' && apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/enfermedad/' + enfermedad + '/apoyo/' + apoyo
        });
      } else if (deporte !== '' && apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/deporte/' + deporte + '/apoyo/' + apoyo
        });
      } else {
        console.log('Selecciona!');
        alert('Seleccione todos los campos');
      }

    } else if (this.state.filtros === 3) {
      if (carrera !== '' && enfermedad !== '' && deporte !== '') {
        this.context.router.push({
          pathname: '/formulario/carrera/' + carrera + '/enfermedad/' + enfermedad + '/deporte/' + deporte
        });
      } else if (carrera !== '' && enfermedad !== '' && apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/carrera/' + carrera + '/enfermedad/' + enfermedad + '/apoyo/' + apoyo
        });
      } else if (carrera !== '' && deporte !== '' && apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/carrera/' + carrera + '/deporte/' + deporte + '/apoyo/' + apoyo
        });
      } else if (enfermedad !== '' && deporte !== '' && apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/enfermedad/' + enfermedad + '/deporte/' + deporte + '/apoyo/' + apoyo
        });
      } else {
        console.log('Selecciona!');
        alert('Seleccione todos los campos');
      }

    } else if (this.state.filtros === 4) {
      if (carrera !== '' && enfermedad !== '' && deporte !== '' && apoyo !== '') {
        this.context.router.push({
          pathname: '/formulario/datos/' + carrera + '/' + enfermedad + '/' + deporte + '/' + apoyo
        });
      } else {
        console.log('Selecciona!');
        alert('Seleccione todos los campos');
      }
    } else {
      console.log('Marque alguna area');
      alert('Marque alguna area');
    }
    /*  
    const url = 'api/filtrarformulario';
        submitForm('POST', url, resultRequest, (status, response) => {
          if (status === 204) {
            console.log('OK!');
          } else {
            console.log('ERROR?!...', response);
        }
      });
    this.context.router.push({
      pathname: '/formulario/' + carrera + '/' + enfermedad + '/' + deporte + '/' + apoyo
    });*/
  }

  handleOnClickCarrera(evt) {
    const val = document.getElementsByName('carrera');
    const select = document.getElementById('carreraselect');
    const check = val[0];
    if (check.checked) {
      select.disabled = false;
      this.setState({ filtros: this.state.filtros + 1 });
    }else {
      this.setState({ filtros: this.state.filtros - 1 });
      select.disabled = true;
    }
  }

  handleOnClickEnfermedad(evt) {
    const val = document.getElementsByName('enfermedad');
    const select = document.getElementById('enfermedadselect');
    const check = val[0];
    if (check.checked) {
      select.disabled = false;
      this.setState({ filtros: this.state.filtros + 1 });
    }else {
      this.setState({ filtros: this.state.filtros - 1 });
      select.disabled = true;
    }
  }

  handleOnClickDeporte(evt) {
    const val = document.getElementsByName('deporte');
    const select = document.getElementById('deporteselect');
    const check = val[0];
    if (check.checked) {
      select.disabled = false;
      this.setState({ filtros: this.state.filtros + 1 });
    }else {
      this.setState({ filtros: this.state.filtros - 1 });
      select.disabled = true;
    }
  }

  handleOnClickApoyo(evt) {
    const val = document.getElementsByName('apoyo');
    const select = document.getElementById('apoyoselect');
    const check = val[0];
    if (check.checked) {
      select.disabled = false;
      this.setState({ filtros: this.state.filtros + 1 });
    }else {
      this.setState({ filtros: this.state.filtros - 1 });
      select.disabled = true;
    }
  }

  render() {

    return (
      <span>
        <section>
        <div className='row'>
          <div className='col s1 left'>
        <a className='btn-floating btn-large blue button-collapse' data-activates='slide-out'>
        <i className='material-icons'>menu</i>
        </a>
        <ul id='slide-out' className='side-nav white'>
          <li><h5 className='center'>UTECTEST</h5></li>
          <li><a><img src='/images/admi.png' width='210' id='img' height='200' /></a></li>
          <li><a><i className='material-icons'>e</i></a></li>
          <li><a><i className='material-icons'>e</i></a></li>
          <li><a><i className='material-icons'>e</i></a></li>
          <li><a className='subheader'>Opciones</a></li>
          <li><a href='/welcome' title='Enviar'><i className='material-icons'>send</i>Enviar Test</a></li>
          <li><a href='/grupos' title='Grupos'><i className='material-icons'>group_add</i>Añadir grupos</a></li>
          <li><div className='divider'></div></li>
          <li><a className='subheader'>Resultados</a></li>
          <li><a href='/alumnos/list' title='Alumnos'><i className='material-icons'>person</i>Alumnos</a></li>
          <li><a href='/formulario/list' title='Formulario'><i className='material-icons'>book</i>Formulario</a></li>
          <li><a href='/grupo/list' title='Grupos'><i className='material-icons'>group</i>Grupos</a></li>
          <li><div className='divider'></div></li>
          <li><a href='/'><i className='material-icons'>exit_to_app</i>CERRAR SESIÓN</a></li>
        </ul>
        </div>
          <div className='col s11 container'>
            <h2 className='center'>Formulario</h2>
            <div className='row'>
              <div className='col s11 m6 offset-m3 left'>
                <div className='card'>
    <div className='card-content'>
      <p>Por favor seleccione el tipo de área por el cuál desea filtrar la información.</p>
      <br></br><br></br>
      <div className='row'>
        <div className='col s12'>
                                <input type='checkbox' name='carrera' id='car' onClick={this.handleOnClickCarrera}/><label htmlFor='car'>Carrera</label><br></br>
                              </div>
        <div className='col s12'>
                                <div className='col s12'>
                                  <select id='carreraselect' className='browser-default' disabled>
                                    <option value='' disabled selected>Seleccione la Carrera</option>
                                    <option value='Ciencia de la Computación'>Ciencia de la Computación</option>
                                    <option value='Ingeniería Industrial'>Ingeniería Industrial</option>
                                    <option value='Ingeniería de la Energía'>Ingeniería de la Energía</option>
                                    <option value='Ingeniería Mecánica'>Ingeniería Mecánica</option>
                                    <option value='Ingeniería Química'>Ingeniería Química</option>
                                    <option value='Ingeniería Ambiental'>Ingeniería Ambiental</option>
                                    <option value='Ingeniería Electrónica'>Ingeniería Electrónica</option>
                                  </select>
                                </div><br></br><br></br>
                              </div>
        <div className='col s12'>
                                <input type='checkbox' name='enfermedad' id='enf' onClick={this.handleOnClickEnfermedad}/><label htmlFor='enf'>Enfermedad</label><br></br>
                              </div>
        <div className='col s12'>
                                <div className='col s12'>
                                  <select id='enfermedadselect' className='browser-default' disabled>
                                    <option value='' disabled selected>Seleccione Enfermedad</option>
                                    <option value='Asma'>Asma</option>
                                    <option value='Baricela'>Baricela</option>
                                    <option value='Diabetes'>Diabetes</option>
                                    <option value='Hipertensión'>Hipertensión</option>
                                    <option value='Ninguna'>Ninguna</option>
                                  </select>
                                </div><br></br><br></br>
                              </div>
        <div className='col s12'>
                                <input type='checkbox' name='deporte' id='dep' onClick={this.handleOnClickDeporte}/><label htmlFor='dep'>Deporte</label><br></br>
                              </div>
        <div className='col s12'>
                                <div className='col s12'>
                                  <select id='deporteselect' className='browser-default' disabled>
                                    <option value='' disabled selected>Seleccione Deporte</option>
                                    <option value='Fútbol'>Fútbol</option>
                                    <option value='Voley'>Voley</option>
                                    <option value='Basquet'>Basquet</option>
                                    <option value='Natación'>Natación</option>
                                    <option value='Muaythai'>Muaythai</option>
                                    <option value='Ninguna'>Ninguna</option>
                                  </select>
                                </div><br></br><br></br>
                              </div>
        <div className='col s12'>
                                <input type='checkbox' name='apoyo' id='apo' onClick={this.handleOnClickApoyo}/><label htmlFor='apo'>Apoyo</label><br></br>
                              </div>
        <div className='col s12'>
                                <div className='col s12'>
                                  <select id='apoyoselect' className='browser-default' disabled>
                                    <option value='' disabled selected>Seleccione Apoyo</option>
                                    <option value='Emocional'>Emocional</option>
                                  </select>
                                </div>
                              </div>
        <div className='right'>
          <br></br><br></br><br></br>
          <button className='btn waves-effect waves-deep-purple btn-default deep-purple text-darken-2' onClick={this.onSubmit}>Buscar<i className='material-icons right'>send</i></button>
        </div><br></br>
      </div>
    </div>
  </div>
              </div>
            </div>
          </div>
        </div>

        </section>
        <br/>
      </span>
    );
  }
};