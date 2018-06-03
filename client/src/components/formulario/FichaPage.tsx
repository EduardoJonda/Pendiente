import * as React from 'react';
import { IRouter, Link } from 'react-router';
import { url, submitForm } from '../../util';
import RadioB from '../form/RadioB';
import SweetAlert from '../../../node_modules/sweetalert-react';
import '../../../node_modules/sweetalert/dist/sweetalert.css';
import { Digits, NotEmpty } from '../form/Constraints';
import Input from '../form/Input';
import RadioInput from '../form/RadioInput4';
import * as $ from '../../../node_modules/jquery';
import '../../../public/css/form-color.css';

import { IInputChangeHandler, IFieldError, IError, IAlumno, IRouterContext } from '../../types';

interface FichaProps {
   alumnoId?: string;
}

interface FichaState {
  error?: IError;
  progress?: string;
  show?: boolean;
  show2?: boolean;
  value?: string;
  alumno?: IAlumno;
};


const tip = [{ value: 'Test del Estres', name: 'Test del Estres'}, { value: 'Test de Millon', name: 'Test de Millon'}, { value: 'Test ICE Baron', name: 'Test ICE Baron'}];

export default class FichaPage extends React.Component<FichaProps, FichaState> {

  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnChangeDeporte = this.handleOnChangeDeporte.bind(this);
    this.handleOnChangeEnfermedad = this.handleOnChangeEnfermedad.bind(this);
    this.handleOnClickEnfermedad = this.handleOnClickEnfermedad.bind(this);
    this.handleOnClickConvivencia = this.handleOnClickConvivencia.bind(this);
    this.handleOnClickTratamiento = this.handleOnClickTratamiento.bind(this);
    this.handleOnClickRendimiento = this.handleOnClickRendimiento.bind(this);
    this.handleOnClickApoyo = this.handleOnClickApoyo.bind(this);

    this.state = {
       mensaje: 'transparent-text',
      progress: 'progress scale-transition scale-out',
     show: false,
     show2: false,
     value: '4',
     alumnoId: props.location.state.alumnoId
    };
  }

  componentDidMount() {
    const { alumnoId } = this.state;
    if (alumnoId) {
      const fetchUrl = url(`/api/student/` + alumnoId);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(alumno => this.setState({ alumno }));
    }
  }


onSubmit(event) {
    event.preventDefault();
   const tel_pers = document.getElementById('telefono_personal').value;
   console.log('1. Telefono personal:' + tel_pers);
   const contacto = document.getElementById('ctoNombres').value;
   console.log('2. Nombre contacto: ' + contacto);
  const parent = document.getElementsByName('par');
  let parentesco;
  for (let i = 0; i < parent.length; i++) {
     if (parent[i].checked) {
         parentesco = parent[i].value;
          console.log('3. Parentesco: ' + parentesco);
        }
   }
   const tel = document.getElementById('telefono').value;
   if (tel.match('^[0-9]+$') && tel.length === 9) {
            console.log('4. Celular Parentesco: ' + tel);
      }
  const ds = document.getElementById('deporteselect');
  let depor = ds.options[ds.selectedIndex].value;
        if ( depor === 'Otros') {
          const deportotr = document.getElementById('deporteotros').value;
          depor = deportotr;
        }
    console.log('5.Deporte:' + depor);
  const conviv = document.getElementsByName('conv');
  let conviviente;
  for (let i = 0; i < conviv.length; i++) {
     if (conviv[i].checked) {
         conviviente = conviv[i].value;
         if (conviviente === 'Otros') {
   const otros = document.getElementById('otros').value;
             conviviente = otros;
         }
        }
   }
    console.log('6.Convivencia: ' + conviviente);
   const enf = document.getElementsByName('enf');
   let gradoEnf;
   let enfermedad;
     if (enf[0].checked) {
        enfermedad = document.getElementById('enfermedad').value;
          const grado = document.getElementsByName('gradoenf');
      for (let i = 0; i < grado.length; i++) {
       if (grado[i].checked) {
           gradoEnf = grado[i].value;
            if ( gradoEnf === 'Otros') {
            const enfotr = document.getElementById('enfermotros').value;
            gradoEnf = enfotr;
          }
        }
        }
        }else {
          enfermedad = 'Ninguna';
          gradoEnf = 'Ninguno';
        }
        console.log('7.Enfermedad: ' + enfermedad);
        console.log('8.Grado Enfermedad: ' + gradoEnf);
   const alergia = document.getElementsByName('alergias');
   let alergias;
   let cont = 0;
    for (let i = 0; i < alergia.length; i++) {
      const opt = alergia[i];
    if (opt.checked) {
      if (cont === 0) {
        alergias = opt.value;
      }else {
        if (opt.value === 'Otros') {
          const ot = document.getElementById('alergiasotr').value;
           alergias = alergias + ',' + ot;
        }else {
          alergias = alergias + ',' + opt.value;
        }
      }
      cont++;
    }else if ( i === 2 && cont === 0) {
       alergias = 'Ninguna';
    }
  }
  console.log('9. Alergias:' + alergias);
  let medic = document.getElementById('medicamentos').value;
        if (medic === '') {
            medic = 'Ninguno';
        }
      console.log('10. Medicamentos:' + medic);
  let gsang = document.getElementById('gruposang').value;
      if (gsang === '') {
            gsang = 'Sin Especificar';
      }
      console.log('11. Grupo Sanguineo:' + gsang);
    const t = document.getElementsByName('trat');
    let trat;
       if (t[0].checked) {
      trat = document.getElementById('tratamiento').value;
          if ( trat === 'Otros') {
              trat = document.getElementById('tratotros').value;
          }
        } else {
          trat = 'Ninguno';
        }
      console.log('12.tratamiento: ' + trat);
  const rend = document.getElementsByName('rend');
    let rendimiento;
       if (rend[0].checked) {
      rendimiento = document.getElementById('rendimiento').value;
        } else {
          rendimiento = 'Ninguno';
        }
      console.log('13.Rendimiento: ' + rendimiento);
    const apoyo = document.getElementsByName('apoyo');
   let apoyos;
   let contador = 0;
    for (let i = 0; i < apoyo.length; i++) {
      const opt = apoyo[i];
    if (opt.checked) {
      if (contador === 0) {
        apoyos = opt.value;
      }else {
        if (opt.value === 'Otros') {
          const ot = document.getElementById('apoyotros').value;
           apoyos = apoyos + ',' + ot;
        }else {
          apoyos = apoyos + ',' + opt.value;
        }
      }
      contador++;
    }else if ( i === 4 && contador === 0) {
       event.preventDefault();
       alert('Debes escoger al menos un apoyo');
       return false;
    }
  }
  console.log('14. Apoyo:' + apoyos);
const { alumnoId } = this.state;
const { alumno } = this.state;

      console.log(alumnoId);
     const resultRequest: IResultadoRequest = {
        telefono_personal: tel_pers,
        nombre_contacto: contacto,
        parentesco_contacto: parentesco,
        telefono_contacto: tel,
        deporte: depor,
        conviviente: conviviente,
        enfermedad: enfermedad,
        grado_enfermedad: gradoEnf,
        alergias: alergias,
        medicamentos: medic,
        grupo_sanguineo: gsang,
        tratamiento: trat,
        rendimiento: rendimiento,
        apoyos: apoyos,
        alumno: alumnoId
      };
      console.log(resultRequest);
/*
    const url = 'api/fichaalumnoregistro';
        submitForm('POST', url, resultRequest, (status, response) => {
          if (status === 204) {
            console.log('OK!');
          this.context.router.push({
          pathname: '/'
        });
          } else {
            console.log('ERROR?!...', response);
           this.setState({ show2: true });
        }
      });
        */
  }

  handleOnClickConvivencia(evt) {
    const val = evt.target.value;
    const inst = document.getElementById('conviotros');
    if (val === 'Otros') {
      inst.disabled = false;
    }else {
      inst.disabled = true;
    }
  }

  handleOnClickEnfermedad(evt) {
    const val = evt.target.value;
    const enf = document.getElementById('enfermedad');
    const radios = document.getElementsByName('gradoenf');

    if (val === 'Si') {
      enf.disabled = false;
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
      }
    }else {
    enf.disabled = true;
    for (let n = 0; n < radios.length; n++) {
        radios[n].disabled = true;
      }
    }

  }

  handleOnChangeEnfermedad(event) {
    const valor = event.target.value;
    const otr = document.getElementById('enfermotros');

    if ( valor === 'Otros') {
      otr.disabled = false;
    }else {
      otr.disabled = true;
    }

  }

  handleInputChange(event) {
    const valor = event.target.value;
    const otr = document.getElementById('alergiasotr');

  const alergia = document.getElementsByName('alergias');
      if ( valor === 'Otros' && alergia[2].checked) {
        otr.disabled = false;
      }else {
         otr.disabled = true;
      }
  }

  handleOnClickApoyo(event) {
    const valor = event.target.value;
    const otr = document.getElementById('apoyotros');

  const apoyo = document.getElementsByName('apoyo');
      if ( valor === 'Otros' && apoyo[4].checked) {
        otr.disabled = false;
      }else {
         otr.disabled = true;
      }
  }

  handleOnClickTratamiento(evt) {
    const val = evt.target.value;
    const trat = document.getElementById('tratamiento');

    if (val === 'Si') {
      trat.disabled = false;
    }else {
      trat.disabled = true;
    }

  }

  handleOnChangeTratamiento(event) {
    const valor = event.target.value;
    const otr = document.getElementById('tratotros');

    if ( valor === 'Otros') {
      otr.disabled = false;
    }else {
      otr.disabled = true;
    }

  }

  handleOnChangeDeporte(event) {
    const valor = event.target.value;
    const inp = document.getElementById('deporteotros');

    if ( valor === 'Otros') {
      inp.disabled = false;
    }else {
      inp.disabled = true;
    }

  }

  handleOnClickRendimiento(evt) {
    const val = evt.target.value;
    const rend = document.getElementById('rendimiento');

    if (val === 'Si') {
      rend.disabled = false;
    }else {
      rend.disabled = true;
    }
  }

  test  = () => {
    this.setState ({
      progress: 'progress scale-transition scale-in'
    });
  }

  render() {
    const { formulario, error, defvalue } = this.state;
    return (
      <span>
        <div className='row'>
          <div className='col s12 m8 offset-m2 left'>
            <div className='intro deep-purple darken-2 z-depth-1'>
              <div className='row'>
                <div className='col s12 m10 offset-m1 left'>
                <h2 className='white-text'>Resolver Formulario</h2>
                <p className='white-text'>Obligatorios (*)</p>
                <p className='white-text'>(*)La información solicitada es de carácter confidencial y será utilizada sólo para fines internos
de evaluación a los alumnos con el objetivo de velar por su salud física y mental.</p>
                </div>
              </div>
            </div>
            <div className='card white'>
              <div className='card-content grey-text text-darken-3'>
                  <div className='row'>
                    <form className='col s12 m10 offset-m1 left' onSubmit={this.onSubmit}>
                      <div className='row'>
                        <br/>
                        <h4 className='deep-purple-text text-darken-2'>1. Datos Personales</h4>
                        <div className='input-field col s6'>
                          <strong>Telefono/Celular *</strong>
                          <input id='telefono_personal' pattern='.{7}||.{9}' type='number' title='7 o 9 dígitos' required/>
                        </div>
                      </div>
                      <div className='row'>
                        <br/>
                        <h4 className='deep-purple-text text-darken-2'>2. Contactos de emergencia</h4>
                        <div className='input-field col s12'>
                          <strong className='title'>Nombres y apellidos *</strong>
                          <input id='ctoNombres' type='text' required/>
                        </div>
                        <br></br><br></br>
                        <div className='input-field col s12'>
                          <strong className='title'>Parentescos *</strong><br/><br/>
                        </div>
                          <input className='with-gap' name='par' id='padre' value='Padre' type='radio' defaultChecked/>
                          <label htmlFor='padre'>Padre</label><br></br>
                          <input className='with-gap' name='par' id='madre' value='Madre' type='radio'/>
                          <label htmlFor='madre'>Madre</label><br></br>
                          <input className='with-gap' name='par' id='apoderado' value='Apoderado' type='radio'/>
                          <label htmlFor='apoderado'>Apoderado</label><br></br>
                        <br></br>
                        <div className='input-field col s6'>
                          <strong>Telefono *</strong>
                          <input id='telefono' type='number' data-length='9' required/>
                        </div>
                      </div>
                      <div className='row'>
                        <br/>
                        <h4 className='deep-purple-text text-darken-2'>3. Recreación</h4>
                          <br/><br/>
                          <div className='row col s12'>
                              <div className='col s12'>
                                <strong className='title grey-text text-darken-3'>SI PRACTICAS ALGUN DEPORTE, INDICAR CUAL ES *</strong><br/><br/>
                              </div>
                              <div className='col s12'>
                                <div className='col s12 m6'>
                                  <select id='deporteselect' className='browser-default' onChange={this.handleOnChangeDeporte} required>
                                    <option value='' disabled selected>Seleccione el deporte</option>
                                    <option value='Fútbol'>Fútbol</option>
                                    <option value='Voley'>Voley</option>
                                    <option value='Basquet'>Basquet</option>
                                    <option value='Natación'>Natación</option>
                                    <option value='Muaythai'>Muaythai</option>
                                    <option value='Ninguno'>Ninguno</option>
                                    <option value='Otros'>Otro</option>
                                  </select>
                                </div>
                                <div className='input-field col s12 m6'>
                                  <input id='deporteotros' type='text' placeholder='' disabled required/>
                                  <label htmlFor='deporteotros'>Ingrese otro deporte</label>
                                </div>
                              </div>
                          </div>
                          <br/><br/>
                        </div>
                      <div className='row'>
                      <br/>
                      <h4 className='deep-purple-text text-darken-2'>4. Convivencia</h4>
                        <div className='input-field col s12'>
                          <strong className='title'>Indica con quien vives *</strong><br/><br/>
                        </div>
                        <input className='with-gap' name='conv' id='p1' value='Padres' type='radio' onClick={this.handleOnClickConvivencia} defaultChecked />
                        <label htmlFor='p1'>Padres</label><br></br>
                        <input className='with-gap' name='conv' id='p2' value='Padre' type='radio' onClick={this.handleOnClickConvivencia}/>
                        <label htmlFor='p2'>Padre</label><br></br>
                        <input className='with-gap' name='conv' id='p3' value='Madre' type='radio' onClick={this.handleOnClickConvivencia}/>
                        <label htmlFor='p3'>Madre</label><br></br>
                        <input className='with-gap' name='conv' id='p4' value='Familiares' type='radio' onClick={this.handleOnClickConvivencia}/>
                        <label htmlFor='p4'>Familiares</label><br></br>
                        <input className='with-gap' name='conv' id='p5' value='Solo' type='radio' onClick={this.handleOnClickConvivencia}/>
                        <label htmlFor='p5'>Solo</label><br></br>
                        <input className='with-gap' name='conv' id='p6' value='Otros' type='radio' onClick={this.handleOnClickConvivencia}/>
                        <label htmlFor='p6'>Otros:</label>
                        <div className='input-field inline'>
                          <input id='conviotros' type='text' disabled required/>
                        </div>
                      </div>
                      <div className='row'>
                        <br/>
                        <h4 className='deep-purple-text text-darken-2'>5. Salud</h4>
                          <br/>
                          <div className='row col s12'>
                            <div className='col s12'>
                              <strong className='title grey-text text-darken-3'>¿PADECES O HAS PADECIDO DE ALGUNA ENFERMEDAD? *</strong><br/>
                            </div>
                            <div className='col s3'>
                              <input className='with-gap' name='enf' id='sienf' value='Si' type='radio' onClick={this.handleOnClickEnfermedad}/>
                              <label htmlFor='sienf'>Si</label><br></br>
                              <input className='with-gap' name='enf' id='noenf' value='No' type='radio' onClick={this.handleOnClickEnfermedad} defaultChecked/>
                              <label htmlFor='noenf'>No</label>
                            </div>
                          </div>
                          <br/><br/>
                          <div className='row col s12'>
                                <div className='col s12'>
                                  <strong className='title grey-text text-darken-3'>¿Cuál?</strong><br/><br/>
                                </div>
                                <div className='col s12'>
                                  <div className='col s12 m6'>
                                    <select id='enfermedad' className='browser-default' onChange={this.handleOnChangeEnfermedad} disabled required>
                                      <option value='' disabled selected>Seleccione la enfermedad</option>
                                      <option value='Diabetes'>Diabetes</option>
                                      <option value='Hipertensión'>Hipertensión Arterial</option>
                                      <option value='Infecciones'>Infecciones Respiratorias</option>
                                      <option value='Cefaleas'>Cefaleas</option>
                                      <option value='Asma'>Asma</option>
                                      <option value='Epilepsia'>Epilepsia</option>
                                      <option value='Otros'>Otras</option>
                                    </select>
                                  </div>
                                  <div className='input-field col s12 m6'>
                                    <input id='enfermotros' type='text' placeholder='' disabled required/>
                                    <label htmlFor='enfermotros'>Ingrese otra enfermedad</label>
                                  </div>
                                </div>
                          </div>
                            <br/><br/>
                            <div className='row col s12'>
                              <div className='col s12'>
                                <strong className='title grey-text text-darken-3'>Indica el grado de la enfermedad</strong><br/><br/>
                              </div>
                              <div className='col s8'>
                                <input className='with-gap' name='gradoenf' id='cronico' value='Cronico' type='radio' disabled/>
                                <label htmlFor='cronico'>Crónico</label><br></br>
                                <input className='with-gap' name='gradoenf' id='perm' value='Permanente' type='radio' disabled/>
                                <label htmlFor='perm'>Permanente</label><br></br>
                                <input className='with-gap' name='gradoenf' id='proceso' value='Proceso' type='radio' disabled/>
                                <label htmlFor='proceso'>En proceso de superación</label><br></br>
                                <input className='with-gap' name='gradoenf' id='superada' value='Superada' type='radio' disabled/>
                                <label htmlFor='superada'>Superada</label><br></br>
                              </div>
                            </div>
                            <br/><br/>
                            <div className='row col s12'>
                              <div className='col s12'>
                                <strong className='title grey-text text-darken-3'>SI PADECES DE ALGUNA ALERGIA, INDICA</strong><br></br>
                              </div><br></br>
                              <br></br>
                              <div className='col s12'>
                                <input type='checkbox' name='alergias' value='Beta' id='id1' onClick={this.handleInputChange}/><label htmlFor='id1'>BETALACTÁMICOS (Penicilina, Cefalosporinicos)</label><br></br>
                                <input type='checkbox' name='alergias' value='Analgesicos' id='id2' onClick={this.handleInputChange}/><label htmlFor='id2'>ANALGÉSICOS-ANTI-INFLAMATORIOS</label><br></br>
                                <input type='checkbox' name='alergias' value='Otros' id='id3' onClick={this.handleInputChange}/><label htmlFor='id3'>Otros</label><br></br>
                            {/*
                              <select multiple id='selectmultid' className='browser-default'>
                                  <option value='0' disabled>Seleccionar alergias</option>
                                  <option value='Beta'>BETALACTÁMICOS (Penicilina, Cefalosporinicos)</option>
                                  <option value='Analgesicos'>ANALGÉSICOS-ANTI-INFLAMATORIOS</option>
                                  <option value='Otros'>OTRAS</option>
                              </select> */}</div>
                              <div className='col s12'>
                              <input id='alergiasotr' type='text' disabled required/>
                              </div>
                            </div><br/><br/>
                            <div className='row col s12'>
                              <div className='input-field col s10'>
                                <strong className='title grey-text text-darken-3'>SI TOMAS MEDICAMENTOS, INDICA CUÁL (ES)</strong>
                                <input id='medicamentos' type='text'/>
                              </div>
                            </div><br/><br/>
                            <div className='row col s12'>
                               <div className='input-field col s10'>
                                <strong className='title grey-text text-darken-3'>Grupo Sanguineo (Opcional)</strong>
                                 <input id='gruposang' type='text'/>
                              </div>
                            </div><br/>
                            <div className='row col s12'>
                              <div className='col s12'>
                                <strong className='title grey-text text-darken-3'>¿TE ENCUENTRAS SIGUIENDO ALGÚN TRATAMIENTO MÉDICO PERMANENTE? *</strong><br/><br/>
                              </div>
                              <div className='col s3'>
                                <input className='with-gap' name='trat' id='sitrat' value='Si' type='radio' onClick={this.handleOnClickTratamiento}/>
                                <label htmlFor='sitrat'>Si</label><br></br>
                                <input className='with-gap'   name='trat' id='notrat' value='No' type='radio' onClick={this.handleOnClickTratamiento} defaultChecked/>
                                <label htmlFor='notrat'>No</label>
                              </div>
                            </div><br/>
                            <div className='row col s12'>
                              <div className='input-field'>
                                <div className='col s12'>
                                  <strong className='title grey-text text-darken-3'>Especifica:</strong><br/><br/>
                                </div>
                                <div className='col s12'>
                                  <div className='col s12 m6'>
                                    <select id='tratamiento' className='browser-default' onChange={this.handleOnChangeTratamiento} disabled required>
                                      <option value='' disabled selected>Seleccione el tratamiento</option>
                                      <option value='Medico'>Médico Particular</option>
                                      <option value='Clínica'>Clínica</option>
                                      <option value='Hospital'>Hospital</option>
                                      <option value='Essalud'>Essalud</option>
                                      <option value='Otros'>Otro</option>
                                    </select>
                                  </div>
                                  <div className='input-field col s12 m6'>
                                    <input id='tratotros' type='text' placeholder='' disabled required/>
                                    <label htmlFor='tratotros'>Ingrese otro tratamiento</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='row col s12'>
                              <div className='col s12'>
                                <strong className='title grey-text text-darken-3'>¿CONSIDERAS QUE HAY ALGÚN FACTOR(DIFICULTAD) QUE AFECTE TU RENDIMIENTO ACADÉMICO? *</strong><br/><br/>
                              </div>
                              <div className='col s3'>
                                <input className='with-gap' name='rend' id='sirend' value='Si' type='radio' onClick={this.handleOnClickRendimiento}/>
                                <label htmlFor='sirend'>Si</label><br></br>
                                <input className='with-gap' name='rend' id='norend' value='No' type='radio' onClick={this.handleOnClickRendimiento} defaultChecked/>
                                <label htmlFor='norend'>No</label>
                              </div>
                            </div><br/>
                            <div className='input-field col s12'>
                              <strong>Indicar brevemente cuál</strong>
                              <input id='rendimiento' type='text' disabled required/>
                            </div><br/>
                            <div className='row col s12'>
                              <div className='col s12'>
                                <strong className='title grey-text text-darken-3'>¿QUÉ TIPO DE APOYO DEL ÁREA PSICOLÓGICA ESPERAS RECIBIR? *</strong><br/><br/>
                              </div>
                              <div className='col s12'>
                                <input type='checkbox' name='apoyo' value='Emocional' id='aem' onClick={this.handleOnClickApoyo}/><label htmlFor='aem'>Apoyo Emocional</label><br></br>
                                <input type='checkbox' name='apoyo' value='Académico' id='aac' onClick={this.handleOnClickApoyo}/><label htmlFor='aac'>Apoyo Académico</label><br></br>
                                <input type='checkbox' name='apoyo' value='Acompañamiento' id='ap' onClick={this.handleOnClickApoyo}/><label htmlFor='ap'>Programas de desarrollo de habilidades blandas</label><br></br>
                                <input type='checkbox' name='apoyo' value='Workshops' id='awo' onClick={this.handleOnClickApoyo}/><label htmlFor='awo'>Workshops</label><br></br>
                                <input type='checkbox' name='apoyo' value='Otros' id='aotr' onClick={this.handleOnClickApoyo}/><label htmlFor='aotr'>Otros</label><br></br>
                                 </div>
                                <div className='input-field col s6'>
                                  <input id='apoyotros' type='text' placeholder='Otros' disabled required/>
                                </div>
                            </div>
                          <br/>
                      </div>
                      <br/>
                      <div className='right'>
                        <button className='btn waves-effect waves-deep-purple btn-default deep-purple text-darken-2' type='submit'>Enviar<i className='material-icons right'>send</i></button>
                      </div>
                      <br/><br/>
                      <div className={this.state.progress}>
                        <div className='indeterminate deep-purple text-darken-2'></div>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
            <SweetAlert
              show={this.state.show}
              type='error'
              title='El teléfono debe ser igual o menor a 9 dígitos'
              onConfirm={ () => {
                this.setState({ show: false });
              }}
            />
            <SweetAlert
              show={this.state.show2}
              type='success'
              title='Formulario completado'
              onConfirm={ () => {
                this.setState({ show2: false });
                this.context.router.push({
                  pathname: '/'
                });
              }}
            />
       </div>
      </span>
    );
  }
}