import { AiOutlineCloseCircle } from "react-icons/ai";


export default function Tarea({id, texto, isCompletada, completarTarea, eliminarTarea}) {
    return <>
    <div className={'d-flex align-items-center justify-content-between ' + (isCompletada ? 'tarea-contenedor completada': 'tarea-contenedor')}>
          <div className="tarea-texto" onClick={() => completarTarea(id)}>{texto}</div>
          <div className="tarea-icono" onClick={() => eliminarTarea(id)}><AiOutlineCloseCircle className="tarea-icono"/></div>
      </div> 
    </>
}