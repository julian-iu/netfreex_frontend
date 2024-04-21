import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function renderMedia() {
  const [renderMedia, setRenderMedia] = useState([]);

  const getMedia = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/media`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setRenderMedia(data);
    if (!response.ok) {
      console.log("No se pudo obtener la info de media");
    }
  };

  const borrar = (id) => {
    fetch(`${import.meta.env.VITE_APP_BACK_URL}/media/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRenderMedia(RenderMedia.filter((media) => media._id !== id));
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div>
      <h1>Renderizacion de Media</h1>
      <table className="director-table">
        <thead>
          <tr>
            <th>Tittle</th>
            <th>sinopsis</th>
            <th>url</th>
            <th>imagenPelicula</th>
            <th>anioEstreno</th>
            <th>generoPrincipal</th>
            <th>directorPrincipal</th>
            <th>productora</th>
            <th>tipo</th>
            <th>creadoEn</th>
            <th>actualizadoEn</th>
          </tr>
        </thead>
        <tbody>
          {renderMedia.map((media) => (
            <tr key={media._id}>
              <td>{media.Tittle}</td>
              <td>{media.Sinopsis}</td>
              <td>{media.Link}</td>
              <td>{media.ImageFront}</td>
              <td>{media.PremierYear}</td>
              <td>{media.genderMajor}</td>
              <td>{media.directorMajor}</td>
              <td>{media.producer}</td>
              <td>{media.Type}</td>
              <td>{media.createIn}</td>
              <td>{media.updatedIn}</td>
              <td>{<Link to={`/editar/media/${media._id}`}>Editar</Link>}</td>
              <td>{<button type="button" onClick={() => borrar(media._id)}>Borrar</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
