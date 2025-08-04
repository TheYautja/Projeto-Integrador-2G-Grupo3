import React, { useState, useEffect } from "react";
import Header from './Header';
import axios from 'axios';

const url = "http://localhost:5000";

function EnviarProduto() {
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    descricao: "",
    quantia: "",
    foto_url: ""
  });

  const [produtos, setProdutos] = useState([]);
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
      if (editId) {
        await axios.put(`${url}/produtos/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post(`${url}/produtos`, formData);
      }
      setFormData({
        nome: "",
        preco: "",
        descricao: "",
        quantia: "",
        foto_url: ""
      });
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao enviar produto:", error);
    }
  };

  const fetchProdutos = async () => {
    try {
      const res = await axios.get(`${url}/produtos`);
      setProdutos(res.data.produto);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/produtos/${id}`);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  const handleEdit = (produto) => {
    setFormData(produto);
    setEditId(produto.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div>
      <Header />
      <h2>{editId ? "Editar Produto" : "Cadastrar Produto"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Preço:
          <input type="number" name="preco" value={formData.preco} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Descrição:
          <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Quantia:
          <input type="number" name="quantia" value={formData.quantia} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Foto (URL):
          <input type="text" name="foto_url" value={formData.foto_url} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">{editId ? "Atualizar" : "Cadastrar"}</button>
      </form>

      <h2>Produtos cadastrados:</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong> - R${produto.preco} <br />
            {produto.descricao} <br />
            Quantia: {produto.quantia} <br />
            <img src={produto.foto_url} alt={produto.nome} width="100" /><br />
            <button onClick={() => handleEdit(produto)}>Editar</button>
            <button onClick={() => handleDelete(produto.id)}>Deletar</button>
            <br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnviarProduto;
