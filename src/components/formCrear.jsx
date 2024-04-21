import React, { useState } from 'react';
import FormcrearTipo from './crear/crearTipo';
import FormcrearMedia from './crear/crearMedia';
import FormcrearProductor from './crear/crearProductor';
import FormcrearDirector from './crear/crearDirector';
import FormcrearGenero from './crear/crearGenero';
import '../styles/formulario.css';

export default function Form({title}){
    const [formularioSave, setFormularioSave] = useState('');

    const handleSelect = (e) => {
        setFormularioSave(e.target.value);
    }

    let form;
    switch (formularioSave) {
        case 'Tipo':
            form = <FormcrearTipo/>
            break;
            
        case 'Media':
            form = <FormcrearMedia/>
            break;

        case 'Productora':
            form = <FormcrearProductor/>
            break;

        case 'Director':
            form = <FormcrearDirector/>
            break;

        case 'Genero':
            form = <FormcrearGenero/>
            break;

        default:
            form = null;
    }
             
    return (
        <React.Fragment>
            <div className='divFormulario'>
               <h1>{title}</h1>
                <form action="/submit-form" method="post">
                    <label className="label" for="opciones">Seleccione:</label>
                    <select className='selectFormulario' name="opciones" id="opciones" value={formularioSave} onChange={handleSelect}>
                        <option value="">sin seleccionar</option>
                        <option value="Media">Media</option>
                        <option value="Productora">Productor</option>
                        <option value="Director">Director</option>
                        <option value="Genero">Genero</option>
                        <option value="Tipo">Tipo</option>
                    </select>
                </form>
                {form}
            </div>
        </React.Fragment>
    )
}