import "../CSS/Header.css"
import { Link } from "react-router-dom";


function Header(){
    return(
        <header className="header">
            <nav>
                <ul className="linksNAV">
                    <li> <Link to = "../Dicaseoficinas">Dicas e Oficinas</Link> </li>
                    <li> <Link to = "../Catalogo_de_produtos">Catalogo</Link> </li>
                    <li> <Link to = "../Enviarproduto">enviar produto</Link> </li>
                    <li> <Link to = "../CadastrologinPage">Cadastro</Link> </li>
                    <li> <Link to = "../Carrinho">carrinho</Link> </li>
                    <li> <Link to = "../homepage">inicial</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;