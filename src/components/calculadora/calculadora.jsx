import "./styles/calculadoraStyle.css";
import Boton from "./boton/boton";
import Pantalla from "./pantalla/pantalla"
import BotonClear from "./clear/botonClear"
import { useState } from "react";
import {evaluate} from 'mathjs'


function Calculadora(props) {



  const [input, setInput] = useState('')



  const agregarInput = valor => {
    setInput(input + valor);
    
  }

  const calculaResultado = () => {
    if (input) {
      setInput(evaluate(input))  
    }else {
      alert('Error')
    }
  }






  return (
    <div className="calculadora-react col-md-6 offset-md-3">
      <h1>Claculadora React</h1>
      <div className="row">
        <div className="col">
          <div className="contenedor-calculadora">
            <Pantalla input={input}></Pantalla>
            <div className="fila">
                    <div className="col"><Boton manejarClick={agregarInput}>1</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>2</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>3</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>+</Boton></div>
            </div>
            <div className="fila">
                    <div className="col"><Boton manejarClick={agregarInput}>4</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>5</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>6</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>-</Boton></div>
            </div>
            <div className="fila">
                    <div className="col"><Boton manejarClick={agregarInput}>7</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>8</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>9</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>*</Boton></div>
            </div>
            <div className="fila">
                    <div className="col"><Boton manejarClick={calculaResultado}>=</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>0</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>.</Boton></div>
                    <div className="col"><Boton manejarClick={agregarInput}>/</Boton></div>
            </div>
            <div className="fila">
              <BotonClear 
              manejarClear={() => {setInput('')}}>
                Clear
                </BotonClear>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculadora;
