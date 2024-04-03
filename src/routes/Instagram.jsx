import { useState } from "react";
import Header from "../components/Header";
import IgPerfil from "../components/IgPerfil";

const Instagram = () => {
  const [usuario, setUsuario] = useState("");
  //  Inicializamos el estado de datos en null para que no se muestre nada en la primera carga y no haya errores en el redenrizado
  const [datos, setDatos] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (usuario.trim() === "") {
      alert("Ingrese un valor válido");
      return;
    }
    setUsuario("");
    getInstagram(usuario);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c17e65117bmsh1f999566d5e5ccbp1ec169jsneb342c09d676",
      "X-RapidAPI-Host": "instagram-scraper-2022.p.rapidapi.com",
    },
  };

  //const getInstagram = async (usuario) => {
  async function getInstagram(usuario) {
    try {
      let url = `https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/?user=${usuario}`;
      let response = await fetch(url, options);
      let result = await response.json();
      setDatos(result.user);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <main>
        <h1>Instagram</h1>
        <form className="buscar-usuario">
          <p>Conoce los datos de un usuario de instagram</p>
          <input
            className="input-user"
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <button className="button-search" type="submit" onClick={handleClick}>
            Buscar
          </button>
        </form>

        {/* En el caso que no se tengan los datos porque no se buscó nada, no va a mostrar nada */}
        {datos && <IgPerfil datos={datos} />}
      </main>
    </>
  );
};

export default Instagram;
