import React from 'react';

const Search = (props) => {
  const {getNegocios} = props;
  
  const detectarCambios = (evento) => {
    getNegocios(evento.target.value);
    console.log(evento.target.value)
  }
    return (
        <div className="input-group mb-3">
  <input type="text" onChange={detectarCambios} className="form-control" placeholder="Busca negocios cerca de ti" aria-label="busca locales" aria-describedby="basic-addon1"></input>
</div>
)
};

export default Search;