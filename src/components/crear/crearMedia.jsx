import React, {useState} from "react";

export default function FormMedia() {
  const [Tittle, setTittle] = useState("");
  const [Sinopsis, setSinopsis] = useState("");
  const [Link, setLink] = useState("");
  const [ImageFront, setImageFront] = useState("");
  const [premierYear, setPremierYear] = useState("");
  const [genderMajor, setGenderMajor] = useState("");
  const [directorMajor, setDirectorMajor] = useState("");
  const [producer, setProducer] = useState("");
  const [Type, setType] = useState("");
  const [createIn, setCreateIn] = useState("");
  const [updateIn, setUpdateIn] = useState("");

  const handleTittle = (event) => {
    setTittle(event.target.value);
  };
  const handleSinopsis = (event) => {
    setSinopsis(event.target.value);
  };
  const handleLink = (event) => {
    setLink(event.target.value);
  };
  const handleImageFront = (event) => {
    setImageFront(event.target.value);
  };
  const handlePremierYear = (event) => {
    setPremierYear(event.target.value);
  };
  const handleGenderMajor = (event) => {
    setGenderMajor(event.target.value);
  };
  const handleDirectorMajor = (event) => {
    setDirectorMajor(event.target.value);
  };
  const handleProducer = (event) => {
    setProducer(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleCreateIn = (event) => {
    setCreateIn(event.target.value);
  };
  const handleUpdateIn = (event) => {
    setCreateIn(event.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      Tittle : Tittle,
      Sinopsis: Sinopsis,
      Link: Link,
      ImageFront: ImageFront,
      premierYear: premierYear,
      genderMajor: genderMajor,
      directorMajor: directorMajor,
      producer: producer,
      Type: Type,
      createIn: createIn,
      updateIn: updateIn,
    };
    
    try{
      const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/media`, {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok){
        console.log("Tipo fue Creado");
     };
    } catch (error) {
      console.log('Error en la solicitud:', error);
    }
  };


  return (
    <React.Fragment>
      <div className="divFormularioMedia">
        <h1>Media</h1>
        <form method="post" onSubmit={onsubmit}>
          <label for="opciones">llenar la siguiente informacion</label>
          <input
            type="text"
            name="title"
            placeholder="Ingresa el titulo"
            value={Tittle}
            onChange={handleTittle}
          ></input>
          <input
            type="text"
            name="sinopsis"
            placeholder="Ingresar descripcion"
            value={Sinopsis}
            onChange={handleSinopsis}
          ></input>
          <input
            type="text"
            name="url"
            placeholder="Ingresa el Link de la pelicula"
            value={Link}
            onChange={handleLink}
          ></input>
          <input
            type="text"
            name="imagenPelicula"
            placeholder="Ingresar el Link de la imagen"
            value={ImageFront}
            onChange={handleImageFront}
          ></input>
          <input
            type="text"
            name="anioEstreno"
            placeholder="Ingresa el año de estreno"
            value={premierYear}
            onChange={handlePremierYear}
          ></input>
          <input
            type="text"
            name="generoPrincipal"
            placeholder="Ingresa el genero principal"
            value={genderMajor}
            onChange={handleGenderMajor}
          ></input>
          <input
            type="text"
            name="directorPrincipal"
            placeholder="Ingresa el director de la pelicula"
            value={directorMajor}
            onChange={handleDirectorMajor}
          ></input>
          <input
            type="text"
            name="productora"
            placeholder="Ingresa la productora de la pelicula"
            value={producer}
            onChange={handleProducer}
          ></input>
          <input
            type="text"
            name="tipo"
            placeholder="Ingresa el tipo de pelicula"
            value={Type}
            onChange={handleType}
          ></input>
          <input
            type="date"
            name="creado-En"
            placeholder="Ingresa la fecha de creacion de la peli"
            value={createIn}
            onChange={handleCreateIn}
          ></input>
          <input
            type="date"
            name="actualizado-En"
            placeholder="Ingresa la fecha de actualizacion"
            value={updateIn}
            onChange={handleUpdateIn}
          ></input>
          <button type="submit">Enviar Datos</button>
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h1>Media</h1>
        <table className="container-table">
          <thead>
            <tr>
              <th>titulo</th>
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
            <tr>
              <td>{Tittle}</td>
              <td>{Sinopsis}</td>
              <td>{Link}</td>
              <td>{ImageFront}</td>
              <td>{premierYear}</td>
              <td>{genderMajor}</td>
              <td>{directorMajor}</td>
              <td>{producer}</td>
              <td>{Type}</td>
              <td>{createIn}</td>
              <td>{updateIn}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}