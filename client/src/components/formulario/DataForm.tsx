import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';
import { IAlumno, IDay, IError } from '../../types';
import InputNumber from '../form/InputNumber';
import * as $ from '../../../node_modules/jquery';
import '../../../public/css/form-color.css';

interface IPregProps {
  params?: IAlumno[];
  initialDay?: IDay;
}

interface IResultState {
  editableDay?: IDay[];
  error?: IError;
  resultadoId?: string;
  show?: boolean;
}

interface IResultadoRequest {
  id?: number;
  test?: string;
  descripcion?: string;
  date?: string;
  expdate?: string;
}

export default class ResultadosForm extends React.Component<IPregProps, IResultState> {
  constructor(props) {
    super(props);

    this.state = {
      editableDay: Object.assign({}, props.initialDay),
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(name: string, value: string) {
    const { editableDay, error } = this.state;
    const modifiedGrupo = Object.assign({}, editableDay, { [name]: value });
    this.setState({
      editableDay: modifiedGrupo,
    });
  }

  render() {
    let params = this.props.params;
    const { editableDay, error } = this.state;

    return (
      <section>
             <div className='card-panel light-blue accent-4'>
              <div className='row'>
                <div className='col s12 m10 offset-m1 left'>
                <h4 className='white-text'>Resultado del Formulario <i className='large material-icons right'>beenhere</i></h4>
                </div>
              </div>
            </div>
            <div className='col s12 m12'>
              <div className='card horizontal'>
                <div className='card-panel light-blue accent-2 col s6 m6'>
              <div className='row'>
                <div className='col s6 m10 offset-m1 left'>
                <br/><br/>
                <h4 className='white-text'>Datos</h4>
                <h4 className='white-text'>personales <i className='large material-icons right'>person_pin</i></h4>
                </div>
              </div>
            </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                  <div className='row'>
                        <br/>
                        <div className='input-field col s6'>
                          <strong>TELEFONO/CELULAR</strong>
                          <br/>
                          <p>{params.res_formulario[0].telefono_personal}</p>
                        </div>
                      </div>
                  </div>
                  <div className='card-action'>
                  </div>
                </div>
              </div>
            </div>
            <div className='col s12 m12'>
              <div className='card horizontal'>
                <div className='card-panel light-blue accent-2 col s6 m6'>
              <div className='row'>
                <div className='col s12 m10 offset-m1 left'>
                <br/><br/>
                <h4 className='white-text'>Contactos</h4>
                <h4 className='white-text'>de</h4>
                <h4 className='white-text'>emergencia <i className='large material-icons right'>contacts</i></h4>
                </div>
              </div>
            </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                  <div className='row'>
                        <br/>
                        <div className='input-field col s8'>
                          <strong>NOMBRE DE CONTACTO</strong>
                          <br/>
                          <p>{params.res_formulario[0].nombre_contacto}</p>
                        </div>
                        <div className='input-field col s8'>
                          <strong>PARENTESCO</strong>
                          <br/>
                          <p>{params.res_formulario[0].parentesco_contacto}</p>
                        </div>
                          <div className='input-field col s8'>
                          <strong>TELEFONO DE CONTACTO</strong>
                          <br/>
                          <p>{params.res_formulario[0].telefono_contacto}</p>
                         </div>
                      </div>
                  </div>
                  <div className='card-action'>
                  </div>
                </div>
              </div>
            </div>
         <div className='col s12 m12'>
              <div className='card horizontal'>
                <div className='card-panel light-blue accent-2 col s6 m6'>
                 <div className='row'>
                   <div className='col s12 m10 offset-m1 left'>
                    <br/><br/>
                   <h4 className='white-text'>Recreación <i className='large material-icons right'>directions_run</i></h4>
                   </div>
                 </div>
               </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                  <div className='row'>
                        <br/>
                        <div className='input-field col s8'>
                          <strong>DEPORTE </strong>
                          <br/>
                          <p>{params.res_formulario[0].deporte}</p>
                        </div>
                      </div>
                  </div>
                  <div className='card-action'>
                  </div>
                </div>
              </div>
            </div>
            <div className='col s12 m12'>
              <div className='card horizontal'>
                <div className='card-panel light-blue accent-2 col s6 m6'>
                 <div className='row'>
                   <div className='col s12 m10 offset-m1 left'>
                    <br/><br/>
                   <h4 className='white-text'>Salud <i className='large material-icons right'>favorite</i></h4>
                   </div>
                 </div>
               </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                  <div className='row'>
                        <br/>
                        <div className='input-field col s8'>
                          <strong>PADECER O PADECIDO DE ALGUNA ENFERMEDAD</strong>
                          <br/>
                          <p>{params.res_formulario[0].enfermedad}</p>
                        </div>
                          <div className='input-field col s8'>
                          <strong>GRADO DE LA ENFERMEDAD</strong>
                          <br/>
                          <p>{params.res_formulario[0].grado_enfermedad}</p>
                          </div>
                          <div className='input-field col s8'>
                          <strong>PADECIMIENTO DE ALGUNA ALERGIA</strong>
                          <br/>
                          <p>{params.res_formulario[0].alergias}</p>
                          </div>
                          <div className='input-field col s8'>
                          <strong>MEDICAMENTOS</strong>
                          <br/>
                          <p>{params.res_formulario[0].medicamentos}</p>
                          </div>
                          <div className='input-field col s8'>
                          <strong>GRUPO SANGUINEO</strong>
                          <br/>
                          <p>{params.res_formulario[0].grupo_sanguineo}</p>
                          </div>
                          <div className='input-field col s8'>
                          <strong>TRATAMIENTO</strong>
                          <br/>
                          <p>{params.res_formulario[0].tratamiento}</p>
                          </div>
                      </div>
                  </div>
                  <div className='card-action'>
                  </div>
                </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                  <div className='row'>
                        <br/>
                        <div className='input-field col s8'>
                          <strong>FACTOR QUE AFECTE SU RENDIMIENTO</strong>
                          <br/>
                          <p>{params.res_formulario[0].rendimiento}</p>
                        </div>
                        <div className='input-field col s8'>
                          <strong>TIPO DE APOYO DEL ÁREA PSICOLÓGICA ESPERAS RECIBIR</strong>
                          <br/>
                          <p>{params.res_formulario[0].apoyos}</p>
                        </div>
                      </div>
                  </div>
                  <div className='card-action'>
                  </div>
                </div>
              </div>
            </div>
      </section>
    );
  }
}