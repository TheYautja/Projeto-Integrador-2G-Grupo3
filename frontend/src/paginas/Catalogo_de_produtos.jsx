import React from 'react';
import '../CSS/catalogo_de_produtos.css';
import Header from './Header';

function CatalogoDeProdutos() {
  return (
    <div>
      <Header />

      <main>
        <h1>Produtos</h1>
        <Filters />
        <ProductList />
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

function ProductList() {
  return (
    <div className="product-list">
      <ProductCard
        imageUrl="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_SY450_.jpg"
        title="iPhone 12 Apple Verde 64GB"
        price="R$ 1500,00"
        impact="70-90 kg CO₂"
        description="Equivalente ambiental: produção de 200 copos plásticos descartáveis"
        info="Última reforma: 2 meses atrás"
      />
      <ProductCard
        imageUrl="https://images.tcdn.com.br/img/img_prod/668043/estante_armazenadora_de_madeira_161_1_20201.jpg"
        title="Estante de madeira"
        price="R$ 60,00"
        impact="10-20 kg CO₂"
        description="Equivalente ambiental: produção de 200 copos plásticos descartáveis"
        info="Última reforma: 10 dias atrás"
      />
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
  )}


export default CatalogoDeProdutos;