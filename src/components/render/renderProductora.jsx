import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function renderProductor() {
  const [renderProductor, setRenderProductor] = useState([]);

  const getProductor = async () => {
      const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/productor`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const data = await response.json();
      setRenderProductor(data);
      if(!response.ok) {
          console.log('No se pudo obtener la info de productoras');
      }
  }

  const borrar = (id) =>{
      fetch(`${import.meta.env.VITE_APP_BACK_URL}/productor/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      setRenderProductor(renderProductor.filter((productor) => productor._id !== id));
  }

  useEffect(() => {
    getProductor();
  }, []);


  return (
    <div>
    <h1>Renderización de Productoras</h1>
    <table className="director-table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Slogan</th>
                <th>Fecha  de Actualizacion</th>
                <th>Fecha de Creación</th>
                <th>Descripcion</th>
            </tr>
        </thead>
        <tbody>
            {renderProductor.map((productor) => (
                <tr key={productor._id}>
                    <td>{productor.Nombre}</td>
                    <td>{productor.estado}</td>
                    <td>{productor.slogan}</td>
                    <td>{productor.descripcion}</td>
                    <td>{productor.fechaCreacion}</td>
                    <td>{productor.fechaActualizacion}</td>
                    <td>{<Link to={`/editar/productor/${productor._id}`}>Editar</Link>}</td>
                    <td>{<button type='button' onClick={() => borrar(productor._id)}>borrar</button>}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
}
