import Header from "./Header"
import "../CSS/Homepage.css"
import img1 from "../assets/silmarillion.jpg"
import img2 from "../assets/iphone1.jpg"
import ondasVerdes from "../assets/homepage ondas verdes.png"
import folhinhas from "../assets/homepage folhas.png"
import reciclagem from "../assets/homepage reciclagem.png"
import Botao from "./BotaoFoda.jsx"
import { useNavigate } from "react-router-dom"
import axios from "axios"





function Homepage (){


const addToCarrinho = async (produtoId) => {
  try {
    await axios.post(
      "http://localhost:5000/carrinho",
      { produto_id: produtoId, quantidade: 1 },
      { withCredentials: true }
    );
    alert("Produto adicionado ao carrinho");
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
                    <p>Transforme o velho em novo, Compre e venda com <span className="negrito">consciencia</span></p>
                        <Botao onClick={goToCatalogo} />
                </div>
            </section>


            <section id="cards">


                    <h2 className="tituloDestaques"> Destaques </h2>
                
                <div className="destaquesHomepage">
                    <div className="cartaoDestaque">
                        <img src={img1} alt="item1" />
                        <h3>J. R. Tolkien - O Silmarillion</h3>
                        <p>em bom estado, com uma ou outra marca de uso</p>
                        <p>1,72kg de carbono economizado</p>
                        <h5>R$ 49,99</h5>
                        <button className="comprar" onClick={() => addToCarrinho(1)}>Comprar</button>
                    </div>
                    <div className="cartaoDestaque">
                        <img src={img2} alt="item2" />
                        <h3>iphone 1</h3>
                        <p>Memoria flash de 4GB e 128Mb de memoria RAM</p>
                        <p>48kg de carbono economizados</p>
                        <h5>R$ 399,99</h5>
                        <button className="comprar" onClick={() => addToCarrinho(2)}>Comprar</button>
                    </div>
                </div>
            </section>


            <section id="impacto">
                <div className="impactoHomepage">
                    <h1>Impacto Coletivo:</h1>
                    <p> <img src={folhinhas}/>1234 kg de carbono evitados ate hoje</p>
                    <p> <img src={reciclagem}/>987 itens reaproveitados</p>
                    <img src={ondasVerdes}></img>
                </div> 
            </section>
        </div>
    );
}

export default Homepage;