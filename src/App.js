
import './App.css';
import Boton from './componentes/Boton';
import zero from './imagenes/imagen-zero.jpg';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
function App() {
  const [input,setInput] = useState('0');
  const agregarInput = valor =>{
    setInput(input + valor);
  };
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
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>
        </div>
        
        <div className='fila'>
          <BotonClear>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
