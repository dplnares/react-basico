import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", user)
      .then((data) => {
        //  Enviar a local storage el token
        localStorage.setItem("token", data.data.token);
        navigation("/");
      })
      .catch((e) => console.error(e));
  };

  //  Validar si el usuario ya tiene un token o no para redirigirlo
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="bg-login">
        <div className="form-login">
          <div className="form-login__div">
            <img src="./logo-disney.webp" alt="logo disney" />
          </div>
          <form onSubmit={submit}>
            <label id="icon" htmlFor="username">
              <i className="bi bi-person"></i>
            </label>
            <input
              required
              type="email"
              placeholder="Email"
              id="username"
              name="email"
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
            <label id="icon" htmlFor="password">
              <i className="bi bi-key"></i>
            </label>
            <input
              required
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
            <button type="submit">Iniciar Sesión</button>
            <div className="crtacc">
              <a href="#">Registrarse</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
