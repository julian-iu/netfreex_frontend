import React, { useState } from "react"
import { useParams } from "react-router-dom";

export default function EditarTipo() {
    const {id} = useParams();
    const [Nombre, setNombre] = useState("");
    const [Descripcion, setDescripcion] = useState("");
    const [FechaCreacion, setFechaCreacion] = useState("");
    const [FechaActualizacion, setFechaActualizacion] = useState("");

    const handleNombre = (event) => {
        setNombre(event.target.value);
    };
    const handleDescripcion = (event) => {
        setDescripcion (event.target.value);
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
        };

        const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/tipo/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.log("Tipo no fue creado correctamente");
        }
        console.log(data);
    };

    return (
    <React.Fragment>
      <div className="divFormularioTipo">
        <h1>Tipo</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">llenar todos los campos</label>
          <input
            type="text"
            name="Nombre"
            placeholder="Ingresa el Nombre de la pelicula"
            value={Nombre}
            onChange={handleNombre}
          ></input>
          <input
            type="text"
            name="Descripcion"
            placeholDer="ingresa la descripcion"
            value={Descripcion}
            onChange={handleDescripcion}
          ></input>
          <input
            type="date"
            name="date-create"
            placeholder="ingresar Fecha de Creacion"
            value={FechaCreacion}
            onChange={handleFechaCreacion}
          ></input>
          <input
            type="date"
            name="date-update"
            placeholder="ingresar Fecha de Actualizacion"
            value={FechaActualizacion}
            onChange={handleFechaActualizacion}
          ></input>
          <button type="submit">enviar Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h1>tipo</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
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