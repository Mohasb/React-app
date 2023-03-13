import './styles/botonStyle.css'


function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div 
    className={`boton ${esOperador(props.children) ? "operador" : ""}`}
    onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}
export default Boton;
