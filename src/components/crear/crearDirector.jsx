import React, { useEffect, useState } from "react";


export default function FormCrearDirector() {
  console.log(import.meta.env.VITE_APP_BACK_URL);
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleEstado = (event) => {
    setEstado(event.target.value);
  };
  const handlefechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handlefechaActualizacion = (event) => {
    setFechaActualizacion(event.target.value);
  };

  useEffect(() => {}, []);

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = {
      Nombre: Nombre,
      Estado: Estado,
      fechaCreacion: fechaCreacion,
      fechaActualizacion: fechaActualizacion,
    };

    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/director`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log("Director no fue creado con exito");
    }
  };

  return (
    <React.Fragment>
      <div className="divformularioDirector">
        <h1> Director</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Por favor, complete la informacion</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa el nombre de la peli"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="estado"
            placeholder="Ingresa el estado"
            value={Estado}
            onChange={handleEstado}
          ></input>
          <input
            type="date"
            name="fechaCreacion"
            placeholder="Fecha de Creacion"
            value={fechaCreacion}
            onChange={handlefechaCreacion}
          ></input>
          <input
            type="date"
            name="fechaActualizado"
            placeholder="Fecha de Actualizado"
            value={fechaActualizacion}
            onChange={handlefechaActualizacion}
          ></input>
          <button type="submit">Enviar los Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h1>Directores</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nombre}</td>
              <td>{Estado}</td>
              <td>{fechaCreacion}</td>
              <td>{fechaActualizacion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
