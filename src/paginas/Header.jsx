import "../CSS/Header.css"
import { Link } from "react-router-dom";


function Header(){
    return(
        <header className="header">
            <nav>
                <ul className="linksNAV">
                    <li><Link to = "../Homepage">homepage </Link> </li>
                    <li> <Link to = "../ProdutoIndividual">produto individual </Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;