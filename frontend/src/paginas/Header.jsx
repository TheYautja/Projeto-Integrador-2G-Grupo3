import "../CSS/Header.css"
import { Link } from "react-router-dom";
import imgCarrinho from '../assets/header carrinho.png';
import imgUser from '../assets/header pfp.png';
import imgLogo from '../assets/header bolsa.png';

function Header(){
    return(
        <header className="header">
            <nav>
                <ul className="linksNAV">
                    <li className="logo">
                        <Link to="/homepage"><img src={imgLogo} alt="logo" /></Link>
                    </li>
                    <li><Link to="/homepage">INICIO</Link></li>
                    <li><Link to="/Catalogo_de_produtos">PRODUTOS</Link></li>
                    <li><Link to="/Enviarproduto">VENDER</Link></li>
                    <li><Link to="/Dicaseoficinas">DICAS E OFICINAS</Link></li>
                    <li className="icone">
                        <Link to="/Carrinho"><img src={imgCarrinho} alt="carrinho" /></Link>
                    </li>
                    <li className="icone2">
                        <Link to="/CadastrologinPage"><img src={imgUser} alt="user" /></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;