import { useState } from 'react'
import './style/formularioStyle.css'
import { v4 as uuidv4 } from 'uuid';

export default function Formulario(props) {

    const [input, setInput] = useState('')

    const manejarCambio = e => {
        setInput(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();
        
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)
    }



    return(


        <form onSubmit={manejarEnvio} className="tarea-formulario">
            <input onChange={manejarCambio} type="text" name="texto" id="" className="tarea-input" placeholder="Escribe una tarea" />
            <button className="tarea-boton">Agregar&nbsp;tarea</button>
        </form>



    );
}