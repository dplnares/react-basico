//import { useState } from "react";
import PropTypes from "prop-types";

const IgPerfil = ({ datos }) => {
  console.log(datos);
  //  Estoy recibiendo los datos como un objeto, por lo que puedo acceder a ellos directamente, sin necesidad de destructurarlos en datos.user.full_name por ejemplo
  return (
    <>
      <div className="perfil-usuario">
        <div className="datos-generales">
          <h2>{datos.full_name}</h2>
          <img src={`https://cors-anywhere.herokuapp.com/${datos.hd_profile_pic_url_info.url}`} alt={datos.username} />
          <div className="datos-generales__div">
            <p>
              <strong>Usuario: </strong>
              {datos.username}
            </p>
            <p className="biografia">{datos.biography}</p>
            <p>
              <strong>Seguidores: </strong>
              {datos.follower_count}
            </p>
            <p>
              <strong>Siguiendo: </strong>
              {datos.following_count}
            </p>
            <p>
              <strong>Privado: </strong>
              {datos.is_private ? "Sí" : "No"}
            </p>
            <p>
              <strong>Verificado: </strong>
              {datos.is_verified ? "Sí" : "No"}
            </p>
            <p>
              <strong>Publicaciones: </strong>
              {datos.media_count}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

IgPerfil.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default IgPerfil;
