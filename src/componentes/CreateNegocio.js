import React, { useState } from 'react'

const CreateNegocio = (props) => {
    const { createNegocio } = props;

    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [horario, setHorario] = useState('');
    const [contacto, setContacto] = useState('');
    const [telefono, setTelefono] = useState('');
    const [redes, setRedes] = useState('');

    const nombreHandler = (e) => {
        setNombre(e.target.value);
    }
    const categoriaHandler = (e) => {
        setCategoria(e.target.value);
    }
    const horarioHandler = (e) => {
        setHorario(e.target.value);
    }
    const contactoHandler = (e) => {
        setContacto(e.target.value);
    }
    const telefonoHandler = (e) => {
        setTelefono(e.target.value);
    }
    const redesHandler = (e) => {
        setRedes(e.target.value);
    }

    const submitForm = () => {
        if (nombre !== '' && categoria !== '' && horario !== '' && contacto !== '' && telefono !== '' && redes !== '') {
            createNegocio(categoria, nombre, horario, telefono, redes);
        } else {
            alert('Los campos deben de contener información.');
        }
    }


    return (
        <div className="card bg-transparent">
            <div className="card-body bg-transparent text-dark">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input onChange={nombreHandler} type="text" className="form-control bg-transparent" id="nombre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                    <input onChange={categoriaHandler} type="text" className="form-control bg-transparent" id="categoria" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Horario</label>
                    <input onChange={categoriaHandler} type="text" className="form-control bg-transparent" id="categoria" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Contacto</label>
                    <input onChange={categoriaHandler} type="text" className="form-control bg-transparent" id="categoria" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Teléfono</label>
                    <input onChange={categoriaHandler} type="text" className="form-control bg-transparent" id="categoria" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Redes</label>
                    <input onChange={categoriaHandler} type="text" className="form-control bg-transparent" id="categoria" />
                </div>
                <button onClick={() => submitForm()} className="btn btn-primary">Agregar</button>
            </div>
        </div>
    )
}

export default CreateNegocio