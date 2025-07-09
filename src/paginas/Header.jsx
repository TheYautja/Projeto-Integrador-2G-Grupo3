import "../CSS/Header.css"
import { Link } from "react-router";
import React from "react";

function Header(){
    return(
        <header className="header">
            <nav>
                <ul className="linksNAV">
                    <li><link to='/Homepage'>Homepage</link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;