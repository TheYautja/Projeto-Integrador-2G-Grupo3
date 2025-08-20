import React, { useState, useEffect } from "react";
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
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao enviar os dados", error);
    }
  };

  const fetchProdutos = async () => {
    try {
      const res = await axios.get(`${url}/produtos`);
      setProdutos(res.data.produto);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/produtos/${id}`);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao excluir produto", error);
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
    <div className="enviar-produto-container">
      <Header />
      <h2>
        {editId ? (
          "Editar Produto"
        ) : (
          <>
            Vender <br /> Enviar produto para Vender
          </>
        )}
      </h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nome do Produto:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>

        <label>
          Categoria:
          <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} required />
        </label>

        <label>
          Condição Atual:
          <input type="text" name="condicao" value={formData.condicao} onChange={handleChange} required />
        </label>

        <label>
          Preço Sugerido:
          <input type="number" name="preco" value={formData.preco} onChange={handleChange} required />
        </label>

        <label htmlFor="foto" className="botao-foto">Carregar Imagem</label>
        <input
          id="foto"
          type="file"
          name="foto"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, foto: e.target.files[0] })}
          style={{ display: "none" }}
        />

        <label>
          Descrição Detalhada:
          <input typr="descricao" name={formData.descricao} onChange={handleChange} required />
        </label>

        <label>
          Localização do Produto:
          <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} required />
        </label>

        <button type="submit">{editId ? "Atualizar Produto" : "Enviar Produto"}</button>
      </form>

      <h2>Produtos Cadastrados</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <p><strong>{produto.nome}</strong> - R${produto.preco}</p>
            <p>{produto.descricao}</p>
            <p>Categoria: {produto.categoria}</p>
            <p>Condição: {produto.condicao}</p>
            <p>Localização: {produto.localizacao}</p>
            {produto.foto_url && <img src={produto.foto_url} alt={produto.nome} />}
            <div>
              <button onClick={() => handleEdit(produto)}>Editar</button>
              <button onClick={() => handleDelete(produto.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnviarProduto;
