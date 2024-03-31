import Header from "../components/Header";
import Calculadora from "../components/Calculadora";

const Operaciones = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Calculadora</h1>
        <div className="calculadora">
          <Calculadora />
        </div>
      </main>
    </>
  );
};

export default Operaciones;
