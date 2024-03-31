import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina404 from "./routes/404.jsx";
import Operaciones from "./routes/Operaciones.jsx";
import Musica from "./routes/Musica.jsx";
import Contacto from "./routes/Contacto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/operaciones" element={<Operaciones />} />
      <Route path="/musica" element={<Musica />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
);
