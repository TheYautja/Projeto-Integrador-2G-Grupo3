import Header from "./Header"
import "../CSS/Homepage.css"
import img1 from "../assets/eco-bag.png"
import ondasVerdes from "../assets/homepage ondas verdes.png"
import folhinhas from "../assets/homepage folhas.png"
import reciclagem from "../assets/homepage reciclagem.png"


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
        </div>
    );
}

export default Homepage;