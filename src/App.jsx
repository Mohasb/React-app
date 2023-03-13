import "./App.css";
import logo from './logo.svg';
import { Testimonio } from "./components/testimonios/testimonio";
import ContadorClicks from "./components/contador-clicks/contadorClicks";
import TickTackToe from "./components/tick-tack-toe/tick-tack";
import Calculadora from "./components/calculadora/calculadora";
import Tareas from "./components/tareas/tareas";

function App() {
  return (
    <>

      <div className="app">
        <h1 className="text-white text-center p-4">APRENDIENDO REACT</h1>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <hr className="text-white"/>
        <div className="container testimonios">
          <div className="row">
            <div className="col">
              <h1 className="title-testimonio">
                Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Testimonio
                nombre="Shawn Wang"
                pais="Singapur"
                imagen="shawn"
                cargo="Ingeniero de Software"
                empresa="Amazon"
                testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
              />
              <Testimonio
                nombre="Sarah Chima"
                pais="Nigeria"
                imagen="sarah"
                cargo="Ingeniera de Software"
                empresa="ChatDesk"
                testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
              />
              <Testimonio
                nombre="Emma Bostian"
                pais="Suecia"
                imagen="emma"
                cargo="Ingeniera de Software"
                empresa="Spotify"
                testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
              />
            </div>
          </div>
        </div>
        <hr className="text-white"/>
        <div className="container contadorClicks">
          <ContadorClicks />
        </div>
        <hr className="text-white"/>
        <div className="container juego">
          <TickTackToe />
        </div>
        <hr className="text-white"/>
        <div className="container calculadora">
        <Calculadora/>
        </div>
        <hr className="text-white"/>
        <div className="container aplicacion-tareas">
        <Tareas texto={'Aprender React'}/>
        </div>
        <hr className="text-white"/>
      </div>
    </>
  );
}

export default App;
