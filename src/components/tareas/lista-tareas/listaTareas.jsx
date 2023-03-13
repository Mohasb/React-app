import "./styles/listaTareasStyle.css";
import Formulario from "../form/tareaFormulario";
import { useState } from "react";
import Tarea from '../tarea/tarea'

export default function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas]
        setTareas(tareasActualizadas);

    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas);
  }
  const completarTarea = id => {
    
    const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id) {
            tarea.completada = !tarea.completada
        }
        return tarea
    })
    setTareas(tareasActualizadas)
    console.log(tareasActualizadas);
}

  return (
    <>
      <Formulario  onSubmit={agregarTarea}/>
      <div className="tareas-lista-Contenedor">

        {tareas.map((tarea) => 
          <Tarea 
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto} 
          isCompletada={tarea.completada}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}
          />
        )}
      </div>
    </>
  );
}
