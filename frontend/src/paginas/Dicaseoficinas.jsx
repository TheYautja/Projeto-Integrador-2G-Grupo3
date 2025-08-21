import React from 'react';
import '../CSS/Dicaseoficinas.css';
import Header from "../paginas/Header"

function DicasOficinas() {
  return (
    <div>
    <Header />
    <section className="container">
      <h1>Dicas e oficinas</h1>

      <div className="destaques">
        <p><strong>oficina em destaque:</strong> “Restauração de madeira”</p>
        <p><strong>dica criativa:</strong> “Roupa tie-dye com sobras de tecido”</p>
      </div>

      <div className="agenda">
        <h2>Agenda de oficinas</h2>
        <ul>
          <li>05/07 - Oficina de Móveis (Concórdia - SC)</li>
          <li>08/07 - Oficina de Costura (Online)</li>
          <li>15/08 - Oficina de Brinquedo (Capinzal - SC)</li>
        </ul>
      </div>

      <div className="videos">
        <h2>Vídeos</h2>
        <ul>
          <li><a href="#">Restaurando uma camisa que não uso mais</a></li>
          <li><a href="#">Restaurando minha estante</a></li>
        </ul>
      </div>
    </section>
    </div>
  );
}

export default DicasOficinas;

