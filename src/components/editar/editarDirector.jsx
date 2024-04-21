import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function EditarDirector() {
    const {id} = useParams();
    const [Nombre, setNombre] = useState("");
    const [Estado, setEstado] = useState("");
    const [fechaCreacion, setfechaCreacion] = useState("");
    const [fechaActualizacion, setfechaActualizacion] = useState("");
  
    const handleNombre = (event) => {
      setNombre(event.target.value);
    };
    const handleEstado = (event) => {
      setEstado(event.target.value);
    };
    const handlefechaCreacion = (event) => {
      setfechaCreacion(event.target.value);
    };
    const handlefechaActualizacion = (event) => {
      setfechaActualizacion(event.target.value);
    };
  
  
    const onsubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        Nombre: Nombre,
        Estado: Estado,
        fechaCreacion: fechaCreacion,
        fechaActualizacion: fechaActualizacion,
      };
  
      const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/director/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        console.log("Director no fue actualizado con exito");
      }
    };
  
    return (
      <React.Fragment>
        <div className="divformularioDirector">
          <h1>Modulo Director</h1>
          <form method="post" onSubmit={onsubmit}>
            <label for="opciones">Por favor, llene todos los campos</label>
            <input
              type="text"
              name="Nombre"
              placeholder="Ingresa el Nombre"
              value={Nombre}
              onChange={handleName}
            ></input>
            <input
              type="text"
              name="Estado"
              placeholder="ingresar el Estado"
              value={Estado}
              onChange={handleState}
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
        <div>
          <h1>Director</h1>
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
                <td>{Nombre}</td>
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