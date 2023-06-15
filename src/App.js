
import './App.css';
import Boton from './componentes/Boton';
import zero from './imagenes/imagen-zero.jpg';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input,setInput] = useState('');
  const agregarInput = valor =>{
    setInput(input + valor);
  };
  const calcularResultado = () =>{
    setInput(evaluate(input))
  }
  return (
    <div className="App">
      <div className='zero-logo-contenedor'>
        <img
        src={zero}
        className='zero-logo'
        alt='zero-logo'
        />
       
      </div>
      <div className='contenedor-calculadora'>
        
        <Pantalla input={input} />
        
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
