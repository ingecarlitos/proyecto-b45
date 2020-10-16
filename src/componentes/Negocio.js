import React from 'react'


const Negocio = (props) => {

    const{nombre, categoria, horario, contacto, telefono, redes, deleteTask, updateTask, imagen, done, id} = props;

    return (
        <div className="card">
            <img src={imagen} class="card-img-top" alt="..."></img>
            <h5 className="card-header">{nombre}</h5>
            <div className="card-body">
                <h5 className="card-title">{horario}</h5>
                <p className="card-text">{categoria}</p>
                <h5 className="card-text">{contacto}</h5>
                <h5 className="card-text">{telefono}</h5>
                <h5 className="card-text">{redes}</h5>
                
                {
                    done 
                    ? <button className="btn btn-secundary" onClick={() => {updateTask(nombre, categoria, horario, contacto, telefono, redes, id)}}>Deshacer</button>
                    : <button className="btn btn-primary" onClick={() => {updateTask(nombre, categoria, horario, contacto, telefono, redes, id)}}>Completar</button>
                }
                <button onClick={()=>{deleteTask(id)}} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default Negocio