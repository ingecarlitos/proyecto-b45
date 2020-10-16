import React, { useState, useEffect} from 'react'
import './Main.css';
import axios from 'axios';
import { NegocioClass } from '../utils/NegocioClass.js';



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

    const updateNegocio = (nombre, categoria, horario, contacto, telefono, redes, id) => {
        const negocioActual = new NegocioClass(nombre, categoria, horario, contacto, telefono, redes, id)
        
        axios.patch(URL, negocioActual)
        .then(() => getNegocios())
        .catch(error => alert(error))
    }

    return (
        <div>
            <main className="background">
                <div className="container">
                <h1 className= "text-light">Negocios </h1>
                {
                    Object.keys(negocios).map(identificador => {
                       return (
                        <Negocio
                        nombre={negocios[identificador].nombre}
                        categoria={negocios[identificador].categoria}
                        horario={negocios[identificador].horario}
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
