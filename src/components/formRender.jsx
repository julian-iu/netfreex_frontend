import React, { useState } from "react";
import RenderDirector from "./render/renderDirector";
import RenderGenero from "./render/renderGenero";
import RenderMedia from "./render/renderMedia"
;import RenderProductora from "./render/renderProductora";
import RenderTipo from "./render/renderTipo";
import '../styles/formulario.css';

export default function formRender() {
    const [formSave, setFormSave] = useState("");
  
    const handleSelect = (e) => {
      setFormSave(e.target.value);
    };
  
    let formulario;
    switch (formSave) {
      case "director":
        formulario = <RenderDirector />;
        break;
      case "genero":
        formulario = <RenderGenero />;
        break;
      case "media":
        formulario = <RenderMedia />;
        break;
      case "productora":
        formulario = <RenderProductora />;
        break;
      case "tipo":
        formulario = <RenderTipo />;
        break;
      default:
        formulario = null;
    }
  
    return (
      <>
        <div className="divFormulario">
          <h1>Renderizacion ver</h1>
            <label for="opciones">Selecciona el modulo</label>
            <select value={formSave} onChange={handleSelect}>
              <option value="ninguno">sin seleccion</option>
              <option value="director">Director</option>
              <option value="genero">Genero</option>
              <option value="media">Media</option>
              <option value="productora">Productora</option>
              <option value="tipo">Tipo</option>
            </select>
          {formulario}
        </div>
      </>
    );
  }
  