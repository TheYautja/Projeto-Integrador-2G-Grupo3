import React, { useEffect, useState } from 'react';
import '../CSS/catalogo_de_produtos.css';
import Header from './Header';
import axios from 'axios';

const url = "http://localhost:5000";

function CatalogoDeProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    const res = await axios.get(`${url}/produtos`);
    setProdutos(res.data.produto);
  };

  const handleComprar = async (produtoId) => {
    try {
      await axios.post(`${url}/carrinho`, { produto_id: produtoId, quantidade:1 }, { withCredentials:true });
      alert("produto adicionado ao carrinho");
    } catch {
      alert("logue primeiro");
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Produtos</h1>
        <div className="product-list">
          {produtos.map(p => (
<div key={p.id} className="product-card">
  <img src={`${url}/${p.foto_url}`} alt={p.nome} />

  <div className="product-info">
    <h3>{p.nome}</h3>
    <p className="price">R$ {p.preco}</p>
    <p className="impact">
      <strong>Impacto Ambiental</strong><br />
      {p.descricao}
    </p>
    <button className="buy-btn" onClick={() => handleComprar(p.id)}>
      Comprar
    </button>
  </div>
</div>
          ))}
        </div>
      </main>
    </div> 
  );
}

export default CatalogoDeProdutos;
