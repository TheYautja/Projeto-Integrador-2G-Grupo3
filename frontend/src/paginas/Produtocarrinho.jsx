

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
z
        </div>
      </div>
    </div>
  );
}

export default ProdutoCarrinho;
