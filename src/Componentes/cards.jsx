import "../assets/styles/cards.css";

import Alcohol from "../assets/imagenes/alcohol.jpg";
import Nicotina from "../assets/imagenes/nicotina.jpg";
import Cafeina from "../assets/imagenes/cafeina.jpg";

function card(props) {
  return (
    <>
      <div className="padre">

        <div className="card">
          <img src={Alcohol} alt="Verifique su internets" />
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
          <img src={Nicotina} alt="Verifique su internets" />
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
          <img src={Cafeina} alt="Verifique su internets" />
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

export default card;
