import React from 'react';
import foto from '../assets/fonda.jpg';
import { Link } from 'react-router-dom';


const Negocio = (props) => {

    const{nombre, horario, categoria, contacto, telefono, redes, deleteNegocio, updateNegocio, id} = props;
    //const foto = `../assets/${telefono}.jpg`;
    return (
        <div className="card bg-transparent text-dark mt-5">
            <img src={foto} className="card-img-top" alt="..."></img>            
            <div className="card-body">
                <h5 className="card-header">{nombre}</h5>
                <h5 className="card-title">Horario: {horario}</h5>
                <p className="card-text">Categoria:{categoria}</p>
                <h5 className="card-text">Contacto: {contacto}</h5>
                <h5 className="card-text">Teléfono: {telefono}</h5>
                <h5 className="card-text">Redes sociales: {redes}</h5>
            {/* <button className="btn btn-secundary" onClick={() => {updateNegocio(nombre, horario, categoria, contacto, telefono, redes, id)}}>Modificar</button> */}
            <Link className="nav-link text-dark" to="/update">Update <span className="sr-only">(current)</span></Link>
                <button onClick={()=>{deleteNegocio(id)}} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default Negocio