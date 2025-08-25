import Header from "./Header"
import "../CSS/Homepage.css"
import img1 from "../assets/eco-bag.png"
import ondasVerdes from "../assets/homepage ondas verdes.png"
import folhinhas from "../assets/homepage folhas.png"
import reciclagem from "../assets/homepage reciclagem.png"


function Homepage() {
  return (
    <div>
      <Header />

<<<<<<< HEAD
      {/* Hero */}
      <section id="hero">
        <div className="bannerHomepage">
          <p>Transforme o velho em novo. Compre e venda com consciência!</p>
          <div className="botoesHomepage">
            <button className="btn-principal">conheça o funcionamento</button>
            <button className="btn-secundario">comece a vender</button>
          </div>
=======

            <section id="hero">
                <div className="bannerHomepage">
                    <p>Transforme o velho em novo, Compre e venda com <span className="negrito">consciencia</span></p>
                        <button id="botoesHomepage">comece a vender</button>
                </div>
            </section>


            <section id="cards">


                    <h2 className="tituloDestaques"> Destaques </h2>
                
                <div className="destaquesHomepage">
                    <div className="cartaoDestaque">
                        <img src={img1} alt="item1" />
                        <h3>produto</h3>
                        <p>descricao</p>
                        <h5>R$ xxxx,xx</h5>
                    </div>
                    <div className="cartaoDestaque">
                        <img src={img1} alt="item1" />
                        <h3>produto</h3>
                        <p>descricao</p>
                        <h5>R$ xxxx,xx</h5>
                    </div>
                </div>
            </section>


            <section id="impacto">
                <div className="impactoHomepage">
                    <h1>Impacto Coletivo:</h1>
                    <p> <img src={folhinhas}/>1234 kg de carbono evitados</p>
                    <p> <img src={reciclagem}/>987 itens reaproveitados</p>
                    <img src={ondasVerdes}></img>
                </div> 
            </section>
>>>>>>> ba806feea1127ebe53ad952ea27a127768223968
        </div>
      </section>

      {/* Destaques */}
      <section id="cards">
        <h2 className="tituloDestaques">Destaques</h2>
        <div className="destaquesHomepage">
          <div className="cartaoDestaque">
            <img src="iphone.png" alt="iPhone 12" />
            <p>iPhone 12 Apple Verde 64GB – R$ 1500,00</p>
            <h5>🌱 Impacto Ambiental</h5>
            <span>Reduz descartes eletrônicos e emissão de CO₂</span>
          </div>
          <div className="cartaoDestaque">
            <img src="livro.png" alt="Livro Não é como nos filmes" />
            <p>Livro "Não é como nos filmes" – R$ 20,00</p>
            <h5>🌱 Impacto Ambiental</h5>
            <span>Menor demanda de produção e descarte</span>
          </div>
        </div>
      </section>

      {/* Impacto Coletivo */}
      <section id="impacto">
        <div className="impactoHomepage">
          <h1>Impacto Coletivo</h1>
          <p>🌱 +320kg de CO₂ evitados</p>
          <p>♻️ +1.200 itens reaproveitados</p>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter">
        <div className="newsletterHomepage">
          <h2>Newsletter</h2>
          <p>Receba dicas e histórias inspiradoras</p>
          <form>
            <input type="email" placeholder="Preencha aqui..." />
            <button type="submit">Assinar</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
