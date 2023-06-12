
import './App.css';
import Boton from './componentes/Boton';
import zero from './imagenes/imagen-zero.jpg';
function App() {
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
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
