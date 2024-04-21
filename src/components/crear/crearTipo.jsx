import React, {useState} from "react";

export default function FormTipo() {
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [FechaCreacion, setFechaCreacion] = useState("");
  const [FechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };
  const handleFechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handleFechaActualizacion = (event) => {
    setFechaActualizacion(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = {
      Nombre: Nombre,
      Descripcion: Descripcion,
      FechaCreacion: FechaCreacion,
      FechaActualizacion: FechaActualizacion,
    }

    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/tipo`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(!response.ok) {
      console.log('No fue creado el tipo')
    }
  };
  
  return (
    <React.Fragment>
      <div className="divFormularioTipo">
        <h1>Modulo Tipo</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">Completa la Informacion</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa el nombre del tipo"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="descripcion"
            placeholder="Ingresar descripcion"
            value={Descripcion}
            onChange={handleDescripcion}
          ></input>
          <input
            type="date"
            name="date-create"
            placeholder="Fecha de Creacion"
            value={FechaCreacion}
            onChange={handleFechaCreacion}
          ></input>
          <input
            type="date"
            name="date-update"
            placeholder="Fecha Actualizacion"
            value={FechaActualizacion}
            onChange={handleFechaActualizacion}
          ></input>
          <button type="submit">Enviar los Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h1>tipos</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>descripcion</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Nombre}</td>
              <td>{Descripcion}</td>
              <td>{FechaCreacion}</td>
              <td>{FechaActualizacion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}