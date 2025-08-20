import Header from "./Header"
import "../CSS/Homepage.css"

function Homepage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section id="hero">
        <div className="bannerHomepage">
          <p>Transforme o velho em novo. Compre e venda com consciência!</p>
          <div className="botoesHomepage">
            <button className="btn-principal">conheça o funcionamento</button>
            <button className="btn-secundario">comece a vender</button>
          </div>
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
