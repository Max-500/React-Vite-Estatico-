import "../assets/styles/barra.css";
import logotipo from "../assets/imagenes/no-drogas.svg"


function barra() {
  return (
    <header>
      <nav>
        <div className="logo">
            <img src={logotipo} id="headerL"/>
        </div>
        <ul>
          <li>
            <a href="#seccion1">¿Qué son?</a>
          </li>
          <li>
            <a href="#seccion2">Tipos</a>
          </li>
          <li>
            <a href="#seccion3">Signos de Consumo</a>
          </li>
          <li>
            <a href="#seccion4">Legales</a>
          </li>
          <li>
            <a href="#seccion5">Ilegales</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default barra;