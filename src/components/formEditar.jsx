import React from "react";
import FormEditarDirector from "./editar/editarDirector";
import FormEditarGenero from "./editar/editarGenero";
import FormEditarMedia from "./editar/editarMedia";
import FormEditarProductora from "./editar/editarProductor";
import FormEditarTipo from "./editar/editarTipo";


export default function FormEditar({ edicion }) {
  let form;

  const FormEditar = (edicion) => {
    switch (edicion) {
      case "director":
        return <FormEditarDirector />;
      case "genero":
        return <FormEditarGenero />;
      case "media":
        return <FormEditarMedia />;
      case "productora":
        return <FormEditarProductora />;
      case "tipo":
        return <FormEditarTipo />;
      default:
        form = null;
    }
  };
  return (
    <div className="divFormulario">
      <h1>Edición</h1>
      {FormEditar(edicion)}
    </div>
  );
}
