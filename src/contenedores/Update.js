import React from 'react'
import UpdateNegocio from '../componentes/UpdateNegocio';
import { NegocioClass } from '../utils/NegocioClass';
import axios from 'axios';
import { useHistory} from 'react-router-dom';

const Update = () => {

    const history = useHistory();

    const updateNegocio = (nombre, horario, categoria, contacto, telefono, redes, key) => {
        const URL = 'https://dba-eats.firebaseio.com/negocio.json';
        const updateNegocio = new NegocioClass(nombre, horario, categoria, contacto, telefono, redes, key)

        axios.patch(URL, updateNegocio.key)
        .then(history.push('/'))
        .catch(error => alert(error))

    }

    return (
        <div>
            <main className="background">
                <div className="container">
                    <h1>Modificar Negocio</h1>
                    <UpdateNegocio updateNegocio = {updateNegocio}/>
                </div>
            </main>

        </div>
    )
}

export default Update
