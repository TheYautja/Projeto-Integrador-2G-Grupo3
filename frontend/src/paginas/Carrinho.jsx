import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const url = "http://localhost:5000";

function Carrinho() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetchCarrinho();
  }, []);

  const fetchCarrinho = async () => {
    try {
      const res = await axios.get(`${url}/carrinho`, { withCredentials:true });
      setItens(res.data.carrinho);
    } catch {
      alert("logue primeiro");
    }
  };

  return (
    <div>
      <Header />
      <h2>Meu Carrinho</h2>
      {itens.length === 0 ? <p>carrinho vazio</p> :
        itens.map(item => (
          <div key={item.id}>
            <h4>{item.nome}</h4>
            <p>Preço: R$ {item.preco}</p>
            <p>Quantidade: {item.quantidade}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Carrinho;
