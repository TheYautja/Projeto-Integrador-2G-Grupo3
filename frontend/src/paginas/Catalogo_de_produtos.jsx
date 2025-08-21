import React, { useEffect, useState } from 'react';
import '../CSS/catalogo_de_produtos.css';
import Header from './Header';
import axios from 'axios';

const url = "http://localhost:5000";

function CatalogoDeProdutos() {
  const [produtos, setProdutos] = useState([]);

  // Fetch products on mount
  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const res = await axios.get(`${url}/produtos`);
      setProdutos(res.data.produto);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  return (
    <div>
      <Header />

      <main>
        <h1>Produtos</h1>
        <Filters />
        <ProductList produtos={produtos} />
      </main>
    </div>
  );
}

function Filters() {
  return (
    <div className="filters">
      <p>Categoria: Roupas | Eletrônicos | Móveis | Livros</p>
      <p>Estado do produto: Reformado | Quase novo</p>
      <p>Cidade/região</p>
      <p>Ordenar por: Mais novo | Menor preço | Maior impacto</p>
    </div>
  );
}

function ProductList({ produtos }) {
  if (produtos.length === 0) {
    return <p>Nenhum produto cadastrado (ainda)</p>;
  }

  return (
    <div className="product-list">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          imageUrl={produto.foto_url || "https://via.placeholder.com/150"} // fallback
          title={produto.nome}
          price={`R$ ${produto.preco}`}
          impact="tem que fazer o impacto ambiental ainda"
          description={produto.descricao}
          info={`Categoria: ${produto.categoria} | Condição: ${produto.condicao} | Localização: ${produto.localizacao}`}
        />
      ))}
    </div>
  );
}

function ProductCard({ imageUrl, title, price, impact, description, info }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <div className="product-info">
        <a href="#">{title}</a>
        <div className="price">{price}</div>
        <div className="impact">
          <b>Impacto Ambiental</b><br />
          {impact}<br />
          {description}<br />
          <small>{info}</small>
        </div>
        <button className="buy-btn">Comprar</button>
      </div>
    </div>
  );
}

export default CatalogoDeProdutos;
