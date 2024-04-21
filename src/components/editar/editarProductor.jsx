import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarProductor() {
  const { id } = useParams();
  const [slogan, setslogan] = useState("");
  const [Nombre, setNombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [fechaCreacion, setfechaCreacion] = useState("");
  const [fechaActualizacion, setfechaActualizacion] = useState("");
  const [estado, setestado] = useState("");

  const handleslogan = (event) => {
    setslogan(event.target.value);
  };
  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handledescripcion = (event) => {
    setdescripcion(event.target.value);
  };
  const handlefechaCreacion = (event) => {
    setfechaCreacion(event.target.value);
  };
  const handlefechaActualizacion = (event) => {
    setfechaActualizacion(event.target.value);
  };
  const handleestado = (event) => {
    setestado(event.target.value);
  };

  // En esta función manejamos el envío del formulario
  const onsubmit = async (event) => {
    event.preventDefault();
    // Creamos el objeto de datos que enviaremos al servidor
    const data = {
      slogan: slogan,
      Nombre: Nombre,
      descripcion: descripcion,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
      estado: estado,
    };

    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/productor/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
  };
  return (
    <React.Fragment>
      <div className="divformularioProductora">
        <h1>Edicion de Productora</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones"> llenar todos los campos</label>
          <input
            type="text"
            name="slogan"
            placeholder="Ingresa el slogan"
            value={slogan}
            onChange={handleslogan}
          ></input>
          <input
            type="text"
            name="Nombre"
            placeholder="Ingresa el Nombre"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="description"
            placeholder="Ingresar descripcion"
            value={descripcion}
            onChange={handledescripcion}
          ></input>
          <input
            type="text"
            name="state"
            placeholder="Ingresa el estado"
            value={estado}
            onChange={handleestado}
          ></input>
          <input
            type="date"
            name="date-create"
            placeholder="Fecha de Creacion"
            value={fechaCreacion}
            onChange={handlefechaCreacion}
          ></input>
          <input
            type="date"
            name="date-update"
            placeholder="Fecha Actualizacion"
            value={fechaActualizacion}
            onChange={handlefechaActualizacion}
          ></input>
          <button type="submit">Enviar Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div className="table">
        <h1>Productora</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>slogan</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Estado</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{slogan}</td>
              <td>{Nombre}</td>
              <td>{descripcion}</td>
              <td>{estado}</td>
              <td>{fechaCreacion}</td>
              <td>{fechaActualizacion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
