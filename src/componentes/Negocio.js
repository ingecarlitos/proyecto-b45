import React from 'react'


const Negocio = (props) => {

    const{imagen, nombre, categoria, horario, contacto, telefono, redes, deleteNegocio, updateNegocio, done, id} = props;

    return (
        <div className="card bg-transparent text-dark">
            <img src={imagen} className="card-img-top" alt="..."></img>            
            <div className="card-body">
                <h5 className="card-header">{nombre}</h5>
                <h5 className="card-title">Horario: {horario}</h5>
                <p className="card-text">Categoria:{categoria}</p>
                <h5 className="card-text">Contacto: {contacto}</h5>
                <h5 className="card-text">Teléfono: {telefono}</h5>
                <h5 className="card-text">Redes sociales: {redes}</h5>
                
                {
                    done 
                    ? <button className="btn btn-secundary" onClick={() => {updateNegocio(nombre, categoria, horario, contacto, telefono, redes, id)}}>Modificar</button>
                    : <button className="btn btn-primary" onClick={() => {updateNegocio(nombre, categoria, horario, contacto, telefono, redes, id)}}>Completar</button>
                }
                <button onClick={()=>{deleteNegocio(id)}} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default Negocio