import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarMedia() {
  const { id } = useParams();
  const [Title, setTitle] = useState("");
  const [Sinopsis, setSinopsis] = useState("");
  const [Link, setLink] = useState("");
  const [ImageFront, setImageFront] = useState("");
  const [premierYerar, setpremierYear] = useState("");
  const [genderMajor, setgendermajor] = useState("");
  const [directorMajor, setdirectormajor] = useState("");
  const [producer, setproducer] = useState("");
  const [Type, setType] = useState("");
  const [createIn, setcreateIn] = useState("");
  const [updateIn, setupdateIn] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSinopsis = (event) => {
    setSinopsis(event.target.value);
  };
  const handleLink = (event) => {
    setLink(event.target.value);
  };
  const handlepremierYear = (event) => {
    setImageFront(event.target.value);
  };
  const handlepremierYea = (event) => {
    setpremierYear(event.target.value);
  };
  const handlegendermajor = (event) => {
    setgendermajor(event.target.value);
  };
  const handledirectormajor = (event) => {
    setdirectormajor(event.target.value);
  };
  const handleproducer = (event) => {
    setproducer(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handlecreateIn = (event) => {
    setcreateIn(event.target.value);
  };
  const handleupdateIn = (event) => {
    setupdateIn(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const data = {
      Title: Title,
      sinopsis: sinopsis,
      Link: Link,
      ImageFront: ImageFront,
      premierYerar: premierYerar,
      genderMajor: genderMajor,
      directorMajor: directorMajor,
      producer: producer,
      createIn: createIn,
      updateIn: updateIn,
    };

    const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/media/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log(" Creado exitosamente");
    }
  };

  return (
    <React.Fragment>
      <div className="divFormularioMedia">
        <h1>Edicion de Media</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones"> complete todos los campos</label>
          <input
            type="text"
            name="Title"
            placeholder="Ingresa el titulo"
            value={Title}
            onChange={handleTitle}
          ></input>
          <input
            type="text"
            name="sinopsis"
            placeholder="ingresar la descripcion"
            value={sinopsis}
            onChange={handleSinopsis}
          ></input>
          <input
            type="text"
            name="Link"
            placeholder="ingresa el link de la pelicula"
            value={Link}
            onChange={handleUrl}
          ></input>
          <input
            type="text"
            name="ImageFront"
            placeholder="ingresar el Link de la imagen"
            value={ImageFront}
            onChange={handleImagenPelicula}
          ></input>
          <input
            type="text"
            name="premierYerar"
            placeholder="ingresa el año de estreno"
            value={premierYerar}
            onChange={handleAnioEstreno}
          ></input>
          <input
            type="text"
            name="genderMajor"
            placeholder="Ingresa el genero principal"
            value={genderMajor}
            onChange={handleGeneroPrincipal}
          ></input>
          <input
            type="text"
            name="directorMajor"
            placeholder="ingresa el director de la pelicula"
            value={directorMajor}
            onChange={handleDirectorPrincipal}
          ></input>
          <input
            type="text"
            name="producer"
            placeholder="ingresa el productor de la pelicula"
            value={producer}
            onChange={handleProductora}
          ></input>
          <input
            type="text"
            name="tipo"
            placeholder="ingresa el tipo de pelicula"
            value={Type}
            onChange={handle}
          ></input>
          <input
            type="date"
            name="creado-En"
            placeholder="ingresa la fecha de creacion de la pelicula"
            value={createIn}
            onChange={handleCreadoEn}
          ></input>
          <input
            type="date"
            name="actualizado-En"
            placeholder="ingresa la fecha de actualizacion"
            value={updateIn}
            onChange={handleActualizadoEn}
          ></input>
          <button type="submit">Agregar</button>
        </form>
      </div>
      <div className="line">
        <table className="container-table">
          <thead>
            <tr>
              <th>titulo</th>
              <th>sinopsis</th>
              <th>Link</th>
              <th>ImageFront</th>
              <th>premierYerar</th>
              <th>genderMajor</th>
              <th>directorMajor</th>
              <th>producer</th>
              <th></th>
              <th>createIn</th>
              <th>updateIn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Title}</td>
              <td>{sinopsis}</td>
              <td>{Link}</td>
              <td>{ImageFront}</td>
              <td>{premierYerar}</td>
              <td>{genderMajor}</td>
              <td>{directorMajor}</td>
              <td>{producer}</td>
              <td>{}</td>
              <td>{createIn}</td>
              <td>{updateIn}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
