import "./styles/style.css";
import logo from "./assets/logo.svg";
import Boton from "./boton";
import Contador from "./contador";
import { useState } from "react";

function ContadorClicks() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(+numClicks +1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="container contadorClicks">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h4 className="text-white d-inline-block titulo">
            Contador&nbsp;de&nbsp;clicks
          </h4>
          <figure className="figure  d-inline-block h-100">
            <img className="logo" src={logo} alt="logo" />
          </figure>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <Contador numClicks={numClicks} />
        </div>
        <div className="clearfix"></div>
        <div className="col d-flex justify-content-center">
          <Boton
            textoBoton={"Click"}
            esBotonClick={true}
            manejarClick={manejarClick}
            className="boton"
          />
          <Boton
            textoBoton={"Reiniciar"}
            esBotonClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>
    </div>
  );
}
export default ContadorClicks;
