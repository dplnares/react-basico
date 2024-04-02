import { Navigate } from "react-router-dom";
import Cuadricula from "../components/Cuadricula";
import Header from "../components/Header";

const App = () => {

  //  Validamos que estemos con sesión iniciada para mostrar el contenido
  if(!localStorage.getItem("token")) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <main>
        <h1>Peliculas Disney</h1>
        <div className="cuadricula">
          <Cuadricula />
        </div>
        <br />
        <div className="list-numeros">
          <ul>
            <li className="numero">1</li>
            <li className="numero">2</li>
            <li className="numero">3</li>
            <li className="numero">4</li>
            <li className="numero">5</li>
          </ul>
        </div>
      </main> 
    </>
  );
};

export default App;
