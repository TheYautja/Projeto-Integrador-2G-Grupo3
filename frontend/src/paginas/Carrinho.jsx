import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import "../CSS/Carrinho.css";

const url = "http://localhost:5000";

function Carrinho() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetchCarrinho();
  }, []);

  const fetchCarrinho = async () => {
    try {
      const res = await axios.get(`${url}/carrinho`, { withCredentials: true });
      setItens(res.data.carrinho);
    } catch {
      alert("logue primeiro");
    }
  };

  const removerItem = async (id) => {
    try {
      await axios.delete(`${url}/carrinho/${id}`, { withCredentials: true });
      setItens(itens.filter((item) => item.id !== id));
    } catch {
      alert("Erro ao remover item");
    }
  };

  return (
    <div>
      <Header />
      <div className="carrinho-container">
        <h2>Meu Carrinho</h2>
        {itens.length === 0 ? (
          <p className="carrinho-vazio">Carrinho vazio</p>
        ) : (
          itens.map((item) => (
            <div className="item" key={item.id}>
              {item.foto && (
                <img
                  src={`${url}/${item.foto}`}
                  alt={item.nome}
                />
              )}
              <div className="carrinhoInfo">
                <h4>{item.nome}</h4>
                <p className="preco">Preço: R$ {item.preco}</p>
                <p className="quantidade">Quantidade: {item.quantidade}</p>
              </div>
              <button onClick={() => removerItem(item.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Carrinho;
