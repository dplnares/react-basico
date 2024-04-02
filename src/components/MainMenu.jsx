import { useNavigate } from "react-router-dom";

const MainMenu = () => {

  const navigation = useNavigate();

  return (
    <>
      <ul>
        <li>
          <a href="/">Películas</a>
        </li>
        <li>
          <a href="/operaciones">Operaciones</a>
        </li>
        <li>
          <a href="/musica">Música</a>
        </li>
        <li>
          <a href="/perfil">Perfil</a>
        </li>
        <li>
          <a
            onClick={() => {
            localStorage.removeItem("token")
            navigation("/login")
          }}>Cerrar Sesión</a>
        </li>
      </ul>
    </>
  );
};
export default MainMenu;
