import React, { useState } from "react";
import Header from './Header';
import axios from 'axios';
import '../CSS/EnviarProduto.css';

const url = "http://localhost:5000";

function EnviarProduto() {
  const [formData, setFormData] = useState({
    nome: "",
    categoria: "",
    condicao: "",
    preco: "",
    descricao: "",
    localizacao: "",
    foto: null
  });

  const [editId, setEditId] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("nome", formData.nome);
      data.append("categoria", formData.categoria);
      data.append("condicao", formData.condicao);
      data.append("preco", formData.preco);
      data.append("descricao", formData.descricao);
      data.append("localizacao", formData.localizacao);
      if (formData.foto) data.append("foto", formData.foto);

      if (editId) {
        await axios.put(`${url}/produtos/${editId}`, data, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        setEditId(null);
      } else {
        await axios.post(`${url}/produtos`, data, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      }

      setFormData({
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

      <form onSubmit={handleSubmit}>
        <label> nome <input type="text" name="nome" value={formData.nome} onChange={handleChange} required /> </label>

        <label> categoria <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} required /> </label>

        <label> condicao <input type="text" name="condicao" value={formData.condicao} onChange={handleChange} required /> </label>

        <label> preco <input type="number" name="preco" value={formData.preco} onChange={handleChange} required /> </label>

        <label htmlFor="foto">imagem (clicavel, falta estilizar)</label>

        <input id="foto" type="file" name="foto" accept="image/*" onChange={(e) => setFormData(
          { ...formData, foto: e.target.files[0] })}
          style={{ display: "none" }}/>

        <label> descrição <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} required /> </label>

        <label> cidade <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} required /> </label>

        <button type="submit">{editId ? "Atualizar Produto" : "Enviar Produto"}</button>
      </form>
    </div>
  );
}

export default EnviarProduto;
