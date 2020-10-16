import React, { useState } from 'react'

const UpdateNegocio = (props) => {
    const { updateNegocio } = props;

    const [nombre, setNombre] = useState('');
    const [horario, setHorario] = useState('');
    const [categoria, setCategoria] = useState('');
    const [contacto, setContacto] = useState('');
    const [telefono, setTelefono] = useState('');
    const [redes, setRedes] = useState('');

    const nombreHandler = (e) => {
        setNombre(e.target.value);
    }
    const horarioHandler = (e) => {
        setHorario(e.target.value);
    }
    const categoriaHandler = (e) => {
        setCategoria(e.target.value);
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
        if (nombre !== '' && horario !== '' && categoria !== '' && contacto !== '' && telefono !== '' && redes !== '') {
            updateNegocio(nombre, horario, categoria,  contacto, telefono, redes);
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
                    <label htmlFor="horario">Horario</label>
                    <input onChange={horarioHandler} type="text" className="form-control bg-transparent" id="horario" />
                </div>
                <div className="form-group">
                    <label htmlFor="caregoria">Categoría</label>
                    <input onChange={categoriaHandler} type="text" className="form-control bg-transparent" id="categoria" />
                </div>
                <div className="form-group">
                    <label htmlFor="contacto">Contacto</label>
                    <input onChange={contactoHandler} type="text" className="form-control bg-transparent" id="contacto" />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input onChange={telefonoHandler} type="text" className="form-control bg-transparent" id="telefono" />
                </div>
                <div className="form-group">
                    <label htmlFor="redes">Redes</label>
                    <input onChange={redesHandler} type="text" className="form-control bg-transparent" id="redes" />
                </div>
                <button onClick={() => submitForm()} className="btn btn-primary">Modificar</button>
            </div>
        </div>
    )
}

export default UpdateNegocio