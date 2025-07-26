import Header from "./Header"
import "../CSS/Homepage.css"

function Homepage (){
    return(
        <div>
            <Header />
            <div className="bannerHomepage">
                <p>transforme o velho em novo, Compre e venda com consciencia!</p>
            </div>
            <div className="destaquesHomepage">
                <div className="cartaoDestaque">
                    <img src="placeholder.png" alt="item1"></img>
                    <p>descricao</p>
                    <h5>impacto ambiental</h5>
                </div>
                <div className="cartaoDestaque">
                    <img src="placeholder.png" alt="item2"></img>
                    <p>descricao</p>
                    <h5>impacto ambiental</h5>
                </div>
            </div>
            <div className="impactoHomepage">
                <h1>Impacto Coletivo</h1>
                <p>x kg de carbono evitados</p>
                <p>0987 itens reaproveitados</p>
            </div> 
        </div>
    );
}

export default Homepage;