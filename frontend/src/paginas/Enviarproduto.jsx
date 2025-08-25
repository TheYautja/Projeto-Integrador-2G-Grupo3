import React, { useState } from "react";
import Header from './Header';
import axios from 'axios';
import '../CSS/EnviarProduto.css';

const url = "http://localhost:5000";

function EnviarProduto() {
  const [FormState, setFormState] = useState({
    nome: "",
    categoria: "",
    condicao: "",
    preco: "",
    descricao: "",
    localizacao: "",
    foto: null
  });

  const [editarID, seteditarID] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("nome", FormState.nome);
      data.append("categoria", FormState.categoria);
      data.append("condicao", FormState.condicao);
      data.append("preco", FormState.preco);
      data.append("descricao", FormState.descricao);
      data.append("localizacao", FormState.localizacao);
      if (FormState.foto) data.append("foto", FormState.foto);

      if (editarID) {
        await axios.put(`${url}/produtos/${editarID}`, data, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        seteditarID(null);
      } else {
        await axios.post(`${url}/produtos`, data, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      }

      setFormState({
        nome: "",
        categoria: "",
        condicao: "",
        preco: "",
        descricao: "",
        localizacao: "",
        foto: null
      });
    } catch (error) {
      console.error("deu pau no envio", error);
    }
  };



  return (
    <div>
      <Header />
      <h2>enviar produto</h2>

      <form  onSubmit={handleSubmit}>
        <label> nome <input type="text" name="nome" value={FormState.nome} onChange={handleChange} required /> </label>
        <label> categoria <input type="text" name="categoria" value={FormState.categoria} onChange={handleChange} required /> </label>
        <label> condicao <input type="text" name="condicao" value={FormState.condicao} onChange={handleChange} required /> </label>
        <label> preco <input type="number" name="preco" value={FormState.preco} onChange={handleChange} required /> </label>
        <label htmlFor="foto">imagem (clicavel, falta estilizar)</label>

        <input id="foto" type="file" name="foto" accept="image/*" onChange={(e) => setFormState(
          { ...FormState, foto: e.target.files[0] })}
          style={{ display: "none" }}/>

        <label> descrição <input type="text" name="descricao" value={FormState.descricao} onChange={handleChange} required /> </label>
        <label> cidade <input type="text" name="localizacao" value={FormState.localizacao} onChange={handleChange} required /> </label>
        <button type="submit">{editarID ? "Atualizar Produto" : "Enviar Produto"}</button>
        
      </form>
    </div>
  );
}

export default EnviarProduto;
