import React, { useState } from "react";
import Header from './Header';
import axios from 'axios';
import '../CSS/EnviarProduto.css';

const url = "http://localhost:5000";

function EnviarProduto() {
  const [dadosForm, setdadosForm] = useState({
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
    setdadosForm(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new dadosForm();
      data.append("nome", dadosForm.nome);
      data.append("categoria", dadosForm.categoria);
      data.append("condicao", dadosForm.condicao);
      data.append("preco", dadosForm.preco);
      data.append("descricao", dadosForm.descricao);
      data.append("localizacao", dadosForm.localizacao);
      if (dadosForm.foto) data.append("foto", dadosForm.foto);

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

      setdadosForm({
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
        <label> nome <input type="text" name="nome" value={dadosForm.nome} onChange={handleChange} required /> </label>
        <label> categoria <input type="text" name="categoria" value={dadosForm.categoria} onChange={handleChange} required /> </label>
        <label> condicao <input type="text" name="condicao" value={dadosForm.condicao} onChange={handleChange} required /> </label>
        <label> preco <input type="number" name="preco" value={dadosForm.preco} onChange={handleChange} required /> </label>
        <label htmlFor="foto">imagem (clicavel, falta estilizar)</label>

        <input id="foto" type="file" name="foto" accept="image/*" onChange={(e) => setdadosForm(
          { ...dadosForm, foto: e.target.files[0] })}
          style={{ display: "none" }}/>

        <label> descrição <input type="text" name="descricao" value={dadosForm.descricao} onChange={handleChange} required /> </label>
        <label> cidade <input type="text" name="localizacao" value={dadosForm.localizacao} onChange={handleChange} required /> </label>
        <button type="submit">{editarID ? "Atualizar Produto" : "Enviar Produto"}</button>
        
      </form>
    </div>
  );
}

export default EnviarProduto;
