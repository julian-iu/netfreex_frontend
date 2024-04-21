import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarGerero() {
  const { id } = useParams();
  const [Nombre, setNombre] = useState("");
  const [descripcion, setdescription] = useState("");
  const [fechaCreacion, setfechaCreacion] = useState("");
  const [fechaUpdate, setUpdate] = useState("");
  const [Estado, setEstado] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handledescripcion = (event) => {
    setdescription(event.target.value);
  };
  const handlefechaCreacion = (event) => {
    setfechaCreacion(event.target.value);
  };
  const handlefechaUpdate = (event) => {
    setUpdate(event.target.value);
  };
  const handleEstado = (event) => {
    setEstado(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = {
      Nombre: Nombre,
      descripcion: descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
      Estado: Estado,
    };

    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/genero/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log("Genero no fue creado exitosamente");
    }
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className="divFormularioGenero">
        <h1>Modulo Genero</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">completa los campos:</label>
          <input
            type="text"
            name="Nombre"
            placeholder="Ingresa tu Nombre"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="descripcion"
            placeholder="ingresar descripcion"
            value={descripcion}
            onChange={handledescripcion}
          ></input>
          <input
            type="date"
            name="date-create"
            placeholder="Fecha de Creacion"
            value={fechaCreacion}
            onChange={handlefechaCreacion}
          ></input>
          <input
            tUpdate    name="date-update"
            placeholder="Fecha Actualizacion"
            value={fechaActualizacion}
            onChange={handlefechaActualizacion}
          ></input>
          <input
            type="text"
            name="Estado"
            placeholder="ingresa el Estado"
            value={Estado}
            onChange={handleEstado}
          ></input>
          <button type="submit">enviar Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h1>Genero</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Nombre}</td>
              <td>{descripcion}</td>
              <td>{fechaCreacion}</td>
              <td>{fechaActualizacion}</td>
              <td>{Estado}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
