import Cuadricula from "../components/Cuadricula";
import Header from "../components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Peliculas Disney</h1>
        <div className="cuadricula">
          <Cuadricula />
        </div>
      </main> 
    </>
  );
};

export default App;
