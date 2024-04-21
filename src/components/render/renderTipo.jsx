import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function renderTipo() {
  const [renderTipo, setRenderTipo] = useState([]);

  const getTipos = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/tipo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setRenderTipo(data);
    if (!response.ok) {
      console.log("no se pudo obtener mostrar la info de los tipos");
    }
  };

  const borrar =(id) => {
    fetch(`${import.meta.env.VITE_APP_BACK_URL}/tipo/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    setRenderTipo(renderTipo.filter((tipo) => tipo._id !== id));
  };

  useEffect(() => {
    getTipos();
  }, []); 

  return (
    <div>
      <h1>renderizacion de Tipo</h1>
      <table className="director-table">
        <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
              <th>descripcion</th>
            </tr>
        </thead>
        <tbody>
          {renderTipo.map((tipo) => (
            <tr key={tipo._id}>
              <td>{tipo.Nombre}</td>
              <td>{tipo.fechaActualizacion}</td>
              <td>{tipo.fechaCreacion}</td>
              <td>{tipo.Descripcion}</td>
              <td>{<Link to={`/editar/tipo/${tipo._id}`}>Editar</Link>}</td>
              <td>
                {
                  <button type="button" onClick={() => borrar(tipo._id)}>
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
