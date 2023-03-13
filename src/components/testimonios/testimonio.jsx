import "./styles/testimonio.css";

export function Testimonio(props) {
  return (
    <div className="row contenedor-testimonio">
      <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start p-0">
        <figure className="figure w-100 h-100">
          <img
            className="foto-testimonio h-100"
            src={require(`./assets/${props.imagen}.png`)}
            alt={`foto de ${props.imagen}`}
          />
        </figure>
      </div>
      <div className="col col-md-8 d-flex align-items-center">
        <div className="contenedor-texto text-center">
          <p className="nombre-testimonio">
            <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
          </p>
          <p className="cargo-testimonio">
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className="texto-testimonio text-start">"{props.testimonio}"</p>
        </div>
      </div>
    </div>
  );
}
