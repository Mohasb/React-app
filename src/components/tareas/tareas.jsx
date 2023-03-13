import "./style/tareasStyle.css";
import ListaTareas from "./lista-tareas/listaTareas";

export default function Tareas() {
  return (
    <div className="tareas">
      <h1 className="text-center text-white">LISTA DE TAREAS</h1>
      <ListaTareas />
    </div>
  );
}
