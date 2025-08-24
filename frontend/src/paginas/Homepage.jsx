import Header from "./Header"
import "../CSS/Homepage.css"
import img1 from "../assets/eco-bag.png"


function Homepage (){
    return(
        <div>
            <Header />


            <section id="hero">
                <div className="bannerHomepage">
                    <p>Transforme o velho em novo, Compre e venda com <span className="negrito">consciencia</span></p>
                        <button id="botoesHomepage">comece a vender</button>
                </div>
            </section>


            <section id="cards">

                <div className="tituloDestaques">
                    <h2 >destaques</h2>
                </div>
                
                <div className="destaquesHomepage">
                    <div className="cartaoDestaque">
                        <img src={img1} alt="item1"></img>
                        <p>descricao</p>
                        <h5>impacto ambiental</h5>
                    </div>
                    <div className="cartaoDestaque">
                        <img src={img1} alt="item2"></img>
                        <p>descricao</p>
                        <h5>impacto ambiental</h5>
                    </div>
                </div>
            </section>


            <section id="impacto">
                <div className="impactoHomepage">
                    <h1>Impacto Coletivo</h1>
                    <p>x kg de carbono evitados</p>
                    <p>987 itens reaproveitados</p>
                </div> 
            </section>
        </div>
    );
}

export default Homepage;