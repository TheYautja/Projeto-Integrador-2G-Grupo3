import Header from "./Header"
import "../CSS/Homepage.css"
import ondasVerdes from "../assets/homepage ondas verdes.png"
import folhinhas from "../assets/homepage folhas.png"
import reciclagem from "../assets/homepage reciclagem.png"
import Botao from "./BotaoFoda.jsx"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const url = "http://localhost:5000";

function Homepage (){
  const [destaques, setDestaques] = useState([]);
  const [impacto, setImpacto] = useState({ total_carbon_saved: 0, total_items_reaproveitados: 0 });

  useEffect(() => {
    fetchDestaques();
    fetchImpacto();
  }, []);

  const fetchDestaques = async () => {
    try {
      const res = await axios.get(`${url}/produtos`);
      const produtos = res.data.produto || [];
      setDestaques(produtos.slice(0,2));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchImpacto = async () => {
    try {
      const res = await axios.get(`${url}/impacto`);
      setImpacto(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCarrinho = async (produtoId) => {
    try {
      await axios.post(
        "http://localhost:5000/carrinho",
        { produto_id: produtoId, quantidade: 1 },
        { withCredentials: true }
      );
      alert("Produto adicionado ao carrinho");
      fetchImpacto();
    } catch {
      alert("Faça login primeiro");
    }
  };

  const navigate = useNavigate()
  const goToCatalogo = () => {navigate("/Catalogo_de_produtos");};

  return(
    <div>
      <Header />
      <section id="hero">
        <div className="bannerHomepage">
          <p>Transforme o velho em novo, Compre e venda com <span className="negrito">Consciência</span></p>
          <Botao onClick={goToCatalogo} />
        </div>
      </section>

      <section id="cards">
        <h2 className="tituloDestaques"> Destaques </h2>
        <div className="destaquesHomepage">
          {destaques.map(d => (
            <div key={d.id} className="cartaoDestaque">
              {d.foto_url ? <img src={`${url}/${d.foto_url}`} alt={d.nome} /> : null}
              <h3>{d.nome}</h3>
              <p>{d.descricao}</p>
              <p>{d.carbono} kg de carbono economizado</p>
              <h5>R$ {d.preco}</h5>
              <button className="comprar" onClick={() => addToCarrinho(d.id)}>Comprar</button>
            </div>
          ))}
        </div>
      </section>

      <section id="impacto">
        <div className="impactoHomepage">
          <h1>Impacto Coletivo:</h1>
          <p> <img src={folhinhas} alt="folhas" />{impacto.total_carbon_saved} kg de carbono evitados até agora</p>
          <p> <img src={reciclagem} alt="reciclagem" />{impacto.total_items_reaproveitados} itens reaproveitados</p>
          <img src={ondasVerdes} alt="ondas" />
        </div> 
      </section>
    </div>
  );
}

export default Homepage;
