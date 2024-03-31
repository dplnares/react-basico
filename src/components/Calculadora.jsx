import { useEffect, useState } from "react";

const Calculadora = () => {
  // state es para guardar el estado de los inputs, mientras que setState es para actualizar el estado
  const [state, setState] = useState({
    //  Aquí podemos inicializar los valores de los inputs, si no se le coloca un valor inicial, el valor inicial será undefined
    numero1: 0,
    numero2: 0,
    resultado: 0,
    opcion: "suma",
  });

  //  useEffect se ejecuta cada vez que el componente se renderiza, es decir, cada vez que se actualiza el estado
  useEffect(() => {
    console.log(state.numero1);
    console.log(state.numero2);
    console.log(state.resultado);
    console.log(state.opcion);
  });

  const setNumber1 = (e) => {
    setState({
      ...state,
      numero1: e.target.value,
    });
  };
  const setNumber2 = (e) => {
    setState({
      ...state,
      numero2: e.target.value,
    });
  };
  const setOption = (e) => {
    setState({
      ...state,
      opcion: e.target.value,
    });
  };
  const handleClick = () => {
    var result = 0;
    if (state.opcion === "suma") {
      result = Number(state.numero1) + Number(state.numero2);
    } else if (state.opcion === "resta") {
      result = Number(state.numero1) - Number(state.numero2);
    } else if (state.opcion === "multiplicacion") {
      result = Number(state.numero1) * Number(state.numero2);
    } else if (state.opcion === "division") {
      result = Number(state.numero1) / Number(state.numero2);
    }
    setState({
      ...state,
      resultado: result,
    });
  };

  return (
    <>
      <select name="opcion" value={state.opcion} onChange={setOption}>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

      <form>
        <input
          type="number"
          name="numero1"
          value={state.numero1}
          onChange={setNumber1}
        />
        <input
          type="number"
          name="numero2"
          value={state.numero2}
          onChange={setNumber2}
        />
        <input
          type="button"
          className="btnCalcular"
          name="resultado"
          value="Calcular"
          onClick={handleClick}
        />
      </form>
      <span>Resultado: {state.resultado}</span>
    </>
  );
};

export default Calculadora;
