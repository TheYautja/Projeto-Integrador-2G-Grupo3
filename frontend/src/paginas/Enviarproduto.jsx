import React, { useState, useEffect } from "react";
import Header from './Header';
import axios from 'axios';

const url = "http://localhost:5000"

const [descricao, setDescricao]= useState ("")

const handleChange = e =>{
  setDescricao(e.target.value);}

const handleSubmit = e =>{
  e.preventDefaulf();
}
const fetchProdutos = async () =>{
  const data = await axios.get(`${url}/produtos`)
  const {evento} = data.data
  getListaProdutos (produtos)
}

function EnviarProduto(){
  return(
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="descricao">descricao</label>
        <input type="text" onChange={handleChange} name="descricao" id="descricao" value={descricao} />
      </form>
      <button type="submit">enviar</button>
    </div>
  )
}

export default EnviarProduto;