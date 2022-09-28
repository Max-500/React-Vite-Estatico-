import "../assets/styles/pie.css";

function pie() {
  return (
    <footer>
      <div className="sobreMi">
        <h3>Sobre Mi:</h3>
        <p className="parrafo">
          Soy un estudiante en la Universidad Politecnica de Chiapas, curso la
          carrera de Ingenieria en Desarrollo de Software, actualmente estoy
          cursando el 4to Cuatrimestre de la carrera.
        </p>
        <h4>Leonardo Javier Cancino Montoya &copy; 2022</h4>
      </div>
      <div className="contactos">
        <h3>Formas de Contacto</h3>
        <h4>Email</h4>
            <p className="parrafo">ljcm500@gmail.com</p>
            <h4>Telefono</h4>
            <p className="parrafo">+52 9614510080</p>
      </div>
    </footer>
  );
}

export default pie;
