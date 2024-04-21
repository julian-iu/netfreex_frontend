import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function renderDirector() {
  const [renderDirector, setRenderDirector] = useState([]);

  const getDirectores = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/director`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setRenderDirector(data);
    if (!response.ok) {
      console.log("No se pudo obtener la información de los directores");
    }
  };

  const borrar = (id) => {
    fetch(`${import.meta.env.VITE_APP_BACK_URL}/director/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRenderDirector(renderDirector.filter((director) => director._id !== id));
  };

  useEffect(() => {
    getDirectores();
  }, []);

  return (
    <div>
      <h1>renderización de Directores</h1>
      <table className="director-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>fecha de Creación</th>
            <th>fecha de Actualización</th>
          </tr>
        </thead>
        <tbody>
          {renderDirector.map((director) => (
            <tr key={director._id}>
              <td>{director.Nombre}</td>
              <td>{director.Estado}</td>
              <td>{director.fechaCreacion}</td>
              <td>{director.fechaActualizacion}</td>
              <td>{<Link to={`/editar/director/${director._id}`}>Editar</Link>}</td>
              <td>
                {
                  <button type="button" onClick={() => borrar(director._id)}>
                    Borrar
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
