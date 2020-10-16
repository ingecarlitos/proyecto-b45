import React from 'react'
import CreateNegocio from '../componentes/CreateNegocio';
import { NegocioClass } from '../utils/NegocioClass';
import axios from 'axios';
import { useHistory} from 'react-router-dom';

const Create = () => {

    const history = useHistory();

    const createNegocio = (nombre, categoria, horario, contacto, telefono, redes) => {
        const URL = 'https://dba-eats.firebaseio.com/negocio.json';
        const newNegocio = new NegocioClass(nombre, categoria, horario, contacto, telefono, redes, 'a')

        axios.post(URL, newNegocio.a)
        .then(history.push('/'))
        .catch(error => alert(error))

    }

    return (
        <div>
            <main className="background">
                <div className="container">
                    <h1>Agregar Negocio</h1>
                    <CreateNegocio createNegocio = {createNegocio}/>
                </div>
            </main>

        </div>
    )
}

export default Create
