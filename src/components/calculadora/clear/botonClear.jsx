import "./styles/botonClear.css";

const BotonClear = (props) => (
  <div
    className="boton-clear col-6 offset-3 text-center"
    onClick={props.manejarClear}
  >
    {props.children}
  </div>
);
export default BotonClear;
