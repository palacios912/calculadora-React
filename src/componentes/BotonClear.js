import React from "react";
import '../estilos/Boton-clear.css'

const BotonClear = (props) =>(
    <div className='boton-clear'>
        {props.children}
    </div>
);

export default BotonClear;