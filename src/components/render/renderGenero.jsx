import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function renderGenero() {
    const [renderGenero, setRenderGenero] = useState([]);

    const getGeneros = async () => {
        const response = await fetch(`${import.meta.env.VITE_APP_BACK_URL}/genero`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setRenderGenero(data);
        if(!response.ok) {
            console.log('No se pudo obtener la info de genero');
        }
    }

    const borrar = (id) =>{
        fetch(`${import.meta.env.VITE_APP_BACK_URL}/genero/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setRenderGenero(renderGenero.filter((genero) => genero._id !== id));

    }

    useEffect(() => {
        getGeneros();
    }, []);

    return (
        <div>
            <h1>Renderización de Generos</h1>
            <table className="director-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>descripcion</th>
                        <th>fecha de Creación</th>
                        <th>fecha de Actualización</th>
                    </tr>
                </thead>
                <tbody>
                    {renderGenero.map((genero) => (
                        <tr key={genero._id}>
                            <td>{genero.Nombre}</td>
                            <td>{genero.Estado}</td>
                            <td>{genero.descripcion}</td>
                            <td>{genero.fechaCreacion}</td>
                            <td>{genero.fechaUpdate}</td>
                            <td>{<Link to={`/editar/genre/${genero._id}`}>Editar</Link>}</td>
                            <td>{<button type='button' onClick={() => borrar(genero._id)}>Borrar</button>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}