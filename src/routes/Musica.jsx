import { useState } from "react";
import Header from "../components/Header";
//  import { Howl } from 'howler';

const Musica = () => {
  const [cancion, setCancion] = useState("");
  const [canciones, setCanciones] = useState([]);
  //  const [currentSong, setCurrentSong] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (cancion.trim() === "") {
      alert("Ingrese un valor válido");
      return;
    }
    setCancion("");
    getSong(cancion);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5c37be3969msh05d3d6f50507537p1b2469jsn778fd6339f6a",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  async function getSong(cancion) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=tracks&offset=0&limit=6&numberOfTopResults=5`;
      let data = await fetch(url, options);
      let res = await data.json();
      setCanciones(res.tracks.items);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  /*const playSong = (url) => {
    if (currentSong) {
      currentSong.stop();
    }
    const sound = new Howl({
      src: [url],
      html5: true
    });
    setCurrentSong(sound);
    sound.play();
  };*/

  return (
    <>
      <Header />
      <main>
        <h1>Buscando Música Spotify API</h1>
        <div className="buscador">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={cancion}
              onChange={(e) => setCancion(e.target.value)}
            />
            <button type="submit"> Buscar</button>
          </form>
        </div>

        <div className="lista-canciones">
          {canciones.map((cancion, index) => (
            <>
              <article key={index}>
                <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} />
                <div className="text">
                  <h3>{cancion.data.name}</h3>
                  <p><strong>Álbum: </strong>{cancion.data.albumOfTrack.name}</p>
                  <p><strong>Artista: </strong>{cancion.data.artists.items[0].profile.name}</p>
                  <button
                    //  onClick={() => playSong(cancion.data.uri)}
                    onClick={() => window.open(cancion.data.uri)}
                  ><img src="../../public/icon-spotify.png" alt="icono de spotify" />Escuchar</button>
                </div>
              </article>
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default Musica;
