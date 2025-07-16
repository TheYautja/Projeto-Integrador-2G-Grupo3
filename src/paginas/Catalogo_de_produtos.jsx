import React from 'react';
import './CSS/catalogo_de_produtos.css';

function CatalogoDeProdutos() {
  return (
    <div>
      <Navigation />
      <main>
        <h1>Produtos</h1>
        <SearchBar />
        <Filters />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <span className="logo">LOGO</span>
      <ul>
        <li>INÍCIO</li>
        <li>PRODUTOS</li>
        <li>VENDER</li>
        <li>DICAS E OFICINAS</li>
      </ul>
      <div className="icons">
        <span className="cart-icon">🛒</span>
        <span className="user-icon">👤</span>
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="nome, tipo, cidade..." />
      <button aria-label="Pesquisar">🔍</button>
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
  );
}

function Footer() {
  return (
    <footer>
      <span className="footer-icon">🌱</span>
      <span className="footer-icon">🏠</span>
      <span className="footer-icon">👤</span>
    </footer>
  );
}

export default CatalogoDeProdutos;