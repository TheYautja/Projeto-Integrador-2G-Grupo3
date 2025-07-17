import Header from "./Header"


function Carrinho() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <h2 className="form-section">Meu carrinho</h2>

        <ProdutoCarrinho

          nome="Estante de madeira"
          preco="60,00"
          impacto="10–200 kg CO₂ | Equivalente à produção de 200 copos plásticos descartáveis"
          ultimaRevisao="20 dias atrás"
        />
        <ProdutoCarrinho

          nome="iPhone 12 Apple Verde 64GB"
          preco="1500,00"
          impacto="70–100 kg CO₂ | Equivalente à produção de 400 copos plásticos descartáveis"
          ultimaRevisao="2 meses atrás"
        />
        <ProdutoCarrinho
          nome="Apple iPad 10 de 10,9 polegadas (64GB + Wi-Fi) – Prata"
          preco="1785,50"
          impacto="100–150 kg CO₂ | Equivalente à produção de 200 copos plásticos descartáveis"
          ultimaRevisao="5 meses atrás"
        />
      </main>
    </div>
  );
}

function ProdutoCarrinho({ imagem, nome, preco, impacto, ultimaRevisao }) {
  return (
    <div className="produto-carrinho">
      <input type="checkbox" className="checkbox-produto" />
      <img src={imagem} alt={nome} className="imagem-produto" />
      <div className="info-produto">
        <a href="#" className="titulo-produto">{nome}</a>
        <p className="preco">R$ {preco}</p>
        <p className="impacto"><strong>Impacto Ambiental</strong><br />{impacto}</p>
        <p className="revisao">Última reforma: {ultimaRevisao}</p>
        <div className="acoes">
          <button className="btn-comprar">Comprar</button>
          <span className="quantidade">+1</span>
        </div>
      </div>
    </div>
  );
}

export default Carrinho;
