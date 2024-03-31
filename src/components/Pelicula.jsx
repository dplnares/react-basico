import PropTypes from "prop-types";
import { useState } from "react";

const Pelicula = ({ imagen, alt, titulo, visto }) => {
  
  const [check, setCheck] = useState(visto);

  const toogleCheck = () => {
    setCheck(!check);
  };

  const verificarCheck = (check) => {
    if (check) {
      return " ✔ Visto";
    }
    return "✘ No Visto";
  };

  return (
    <div className="card-grid">
      <div className="card-style">
        <img src={imagen} alt={alt} />

        <div className="card-content">
          <h2>{titulo}</h2>
          <div className={check ? "visto" : "no-visto"}>
            <p>{verificarCheck(check)}</p>
          </div>
        </div>
        <div className="card-bottom">
          <button onClick={toogleCheck}>Visto</button>
        </div>
      </div>
    </div>
  );
};

//  Podemos aplicar un filtro para verificar que los datos que se estan pasando sean los correctos
Pelicula.propTypes = {
  imagen: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  visto: PropTypes.bool.isRequired,
};

export default Pelicula;
