import "../assets/styles/cards.css";

import Marihuana from "../assets/imagenes/marihuana.jpg";
import Cocaina from "../assets/imagenes/cocaina.jpg";
import Anfetaminas from "../assets/imagenes/anfetaminas.jpg";

function cards(props) {
  return (
    <>
      <div className="padre">

        <div className="card">
          <img src={Marihuana} alt="Verifique su internets" id="imagenes"/>
          <div className="content">
            <div className="titulo">
            <h2 id="title">{props.title1}</h2>
            </div>
            <div className="detalles">
            <p id="detalles">{props.content1}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Cocaina} alt="Verifique su internets" id="imagenes"/>
          <div className="content">
            <div className="titulo">
            <h2 id="title">{props.title2}</h2>
            </div>
            <div className="detalles">
            <p id="detalles">{props.content2}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Anfetaminas} alt="Verifique su internets"  id="imagenes"/>
          <div className="content">
            <div className="titulo">
            <h2 id="title">{props.title3}</h2>
            </div>
            <div className="detalles">
              <p id="detalles">{props.content3}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default cards;
