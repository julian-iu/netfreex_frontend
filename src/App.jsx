import { React } from "react";
import { NavLink, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import FormEditar from "./components/formEditar";
import FormCrear from "./components/formCrear";
import FormVer from "./components/formRender";

import "./styles/buscador.css";
import SearchMovies from "./components/searchMovies";

function App() {

  return (
    <div className="App">
      
      <header className="header">
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <NavLink to={"/"} className="link-animation">
                Inicio
              </NavLink>
            </li>
            <li className="li">
              <NavLink to={"/crear"} className="link-animation">
                Crear
              </NavLink>
            </li>
            <li className="li">
              <NavLink to={"/visualizar"} className="link-animation">
                Visualizar
              </NavLink>
            </li>
          </ul>
        </nav>
            
      </header>
      <Routes>
        <Route path="/" Component={SearchMovies} />
        <Route path="/crear" Component={FormCrear} />
        <Route path="/visualizar" Component={FormVer} />
        <Route
          path={"/editar/director/:id"}
          element={<FormEditar edicion="director" />}
        />
        <Route
          path={"/editar/genero/:id"}
          element={<FormEditar edicion="genero" />}
        />
        <Route
          path={"/editar/media/:id"}
          element={<FormEditar edicion="media" />}
        />
        <Route
          path={"/editar/productor/:id"}
          element={<FormEditar edicion="productora" />}
        />
        <Route
          path={"/editar/tipo/:id"}
          element={<FormEditar edicion="tipo" />}
        />
      </Routes>
    </div>
  );
}

export default App;
