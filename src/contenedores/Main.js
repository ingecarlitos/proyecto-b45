import React, { useState, useEffect} from 'react'
import './Main.css';
import axios from 'axios';
import { NegocioClass } from '../utils/NegocioClass.js';
import Search from '../componentes/Search';



import Negocio from '../componentes/Negocio';

const Main = () => {

    const [negocios, setNegocios] = useState([]);
    const URL = 'https://dba-eats.firebaseio.com/negocio.json';
    
    
    const getNegocios = () => {
        axios.get(URL)
            .then(respuesta => {
                console.log(respuesta.data)
                setNegocios(respuesta.data)
            })
            .catch(error => alert(error));
        
    }
    useEffect( () => {
        //LLamada a firebase
        getNegocios()
    } , [])

    const deleteNegocio = (id) => {
        const URL = `https://dba-eats.firebaseio.com/negocio/${id}.json`;
        axios.delete(URL)
        .then(() => getNegocios())
        .catch(error => alert(error))
    }

    const updateNegocio = (nombre, horario, categoria, contacto, telefono, redes, id) => {
        const negocioActual = new NegocioClass(nombre, horario, categoria, contacto, telefono, redes, id)
        
        axios.patch(URL, negocioActual)
        .then(() => getNegocios())
        .catch(error => alert(error))
    }

    return (
        <div>
            <main className="background">
                <div className="container">
                    <br></br>
                <h1 className= "text-dark-50">Negocios </h1>
                <Search getNegocios={(getNegocios)}/> 
                {
                    Object.keys(negocios).map(identificador => {
                       return (
                        <Negocio 
                        //imagen= {negocios[identificador].telefono} 
                        nombre={negocios[identificador].nombre}
                        horario={negocios[identificador].horario}
                        categoria={negocios[identificador].categoria}
                        contacto={negocios[identificador].contacto}
                        telefono={negocios[identificador].telefono}
                        redes={negocios[identificador].redes}                    
                        id = {identificador}
                        deleteNegocio={deleteNegocio}
                        updateNegocio={updateNegocio}
                        key={identificador}
                        />
                       ) 
                    })
                    
                }
                
                </div>
            
            </main>
        </div>
    )
}

export default Main
