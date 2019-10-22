import React, { Component } from 'react';
import { render } from 'react-dom';
import ShowMatrices from "./components/ShowMatrices";
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'COR',
      myname: "Gustavo Adolfo Rojas Villarroel",
      number: 1166281998
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <h4>Sopa de letras - Test para entrevista FRONT-END</h4>
        <h1>Hecho por: {this.state.myname} </h1>
        <h1>Número: 1166281998</h1>
        <p>
          Se requiere hacer un <i>component</i> que segun un archivo json con unas matrices, este muestre cuantas veces aparece la palabra "OIE" dentro de ella, ya sea horizontalmente, verticalmente, o en diagonal. (En total, hay que comprobar 8 sentidos diferentes.)
        </p>
        <h4>Entrada:</h4>
        <p>La entrada consiste en seleccionar una de estas 4 matrices (proveniente de un <i>service</i> que lee un json) y mandar la seleccion embedida a una clase que haga la operación.</p>
        <p><b>NOTA:</b> Las matrices se encuentra en un archivo json localizado en: '/resources.json'. El service va a recuperar información de este archivo simulando una petición a una API.</p>
        <h4>Salida:</h4>
        <p>Para cada sopa de letras seleccionada, hay que escribir cuantas veces aparece "OIE" dentro de ella. Para esto es preferible obtener la respuesta en otro <i>componente</i> (se creativ@).</p>

        <ShowMatrices />


      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
