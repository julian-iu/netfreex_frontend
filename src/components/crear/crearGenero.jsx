import React, {useState} from "react";

export default function FormGenero() {
  const [Nombre, setNombre] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");
  const [Estado, setEstado] = useState("");
  const [descripcion, setDescription] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleDescripcion = (event) => {
    setDescription(event.target.value);
  };
  const handlefechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handlefechaActualizacion = (event) => {
    setFechaActualizacion(event.target.value);
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
    }

    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/genero`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if(!response.ok){
      console.log("Genero no fue creado");
    }
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className="divFormularioGenero">
        <h1>Genero</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">rellena la siguiente informacion:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa el nombre"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="descripcion"
            placeholder="Ingresar la descripcion"
            value={descripcion}
            onChange={handleDescripcion}
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
            placeholder="Fecha de Actualizacion"
            value={fechaActualizacion}
            onChange={handlefechaActualizacion}
          ></input>
          <input
            type="text"
            name="estado"
            placeholder="Ingresa el estado"
            value={Estado}
            onChange={handleEstado}
          ></input>
          <button type="submit">Enviar los Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h1>Generos</h1>
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
