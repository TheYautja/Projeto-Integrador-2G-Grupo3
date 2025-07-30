import React, { useState } from "react";
import Header from './Header';


export default function FormularioVenda() {
  const [produto, setProduto] = useState({
    nome: "",
    categoria: "",
    condicao: "",
    preco: "",
    descricao: "",
    localizacao: "",
    fotos: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto enviado:", produto);
    // aqui você pode enviar pra um banco, API, etc.
  };

  return (
    <div>
      <Header />
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "#1f5c2e" }}>Vender</h2>
      <p>Enviar produto para vender</p>

      <label>
        Nome do produto:
        <input
          type="text"
          name="nome"
          value={produto.nome}
          onChange={handleChange}
          placeholder="Preencha aqui..."
        />
      </label>

      <label>
        Categoria:
        <input
          type="text"
          name="categoria"
          value={produto.categoria}
          onChange={handleChange}
          placeholder="Preencha aqui..."
        />
      </label>

      <label>
        Condição atual:
        <input
          type="text"
          name="condicao"
          value={produto.condicao}
          onChange={handleChange}
          placeholder="Preencha aqui..."
        />
      </label>

      <label>
        Preço sugerido:
        <input
          type="number"
          name="preco"
          value={produto.preco}
          onChange={handleChange}
          placeholder="Preencha aqui..."
        />
      </label>

      <label>
        Fotos (upload):
        <input
          type="file"
          name="fotos"
          onChange={handleChange}
          multiple
        />
      </label>

      <label>
        Descrição:
        <textarea
          name="descricao"
          value={produto.descricao}
          onChange={handleChange}
          placeholder="Preencha aqui..."
        />
      </label>

      <label>
        Localização:
        <input
          type="text"
          name="localizacao"
          value={produto.localizacao}
          onChange={handleChange}
          placeholder="Preencha aqui..."
        />
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#1f5c2e",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Anunciar Produto
      </button>
    </form>
    </div>
  );
}
