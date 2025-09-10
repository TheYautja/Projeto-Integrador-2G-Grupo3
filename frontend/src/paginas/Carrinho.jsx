import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import "../CSS/Carrinho.css";
import "/MetodoPagamento.jsx";

const url = "http://localhost:5000";

function Carrinho() {
  const [itens, setItens] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCarrinho();
  }, []);

  const fetchCarrinho = async () => {
    try {
      const res = await axios.get(`${url}/carrinho`, { withCredentials: true });
      setItens(res.data.carrinho || []);
      setTotalCarbon(res.data.total_carbon_saved || 0);
      setTotalPrice(res.data.total_price || 0);
    } catch {
      alert("Faça login primeiro");
    }
  }; 

  const removerItem = async (id) => {
    try {
      await axios.delete(`${url}/carrinho/${id}`, { withCredentials: true });
      fetchCarrinho();
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
          <>
            {itens.map((item) => (
              <div className="item" key={item.carrinho_id}>
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
                  <p className="carbono">
                    Carbono por unidade: {item.carbono_por_unidade} kg<br />
                    Total do item: {item.carbono_total_item} kg
                  </p>
                </div>
                <button onClick={() => removerItem(item.carrinho_id)}>Remover</button>
                </div>
                
            ))}
            <hr />
            <h3>Total de carbono economizado: {totalCarbon} kg CO₂</h3>
            <h3>Total estimado: R$ {totalPrice}</h3>
             <button onClick={console.log("Tudo comprado")}>Comprar tudo</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
