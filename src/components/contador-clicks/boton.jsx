import "./styles/boton.css";



function Boton({ textoBoton, esBotonClick, manejarClick }) {
  return (
    <button
      className={esBotonClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {textoBoton}
    </button>
  );
}
export default Boton;
