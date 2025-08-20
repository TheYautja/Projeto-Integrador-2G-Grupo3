import React, { useState } from 'react';
import Header from './Header';
import '../CSS/CadastroLoginPage.css';

export default function CadastroLoginPage() {
  return (
    <div className="page">
      {/* Cadastro */}
      <h2 className="titulo">Cadastro</h2>
      <div className="card">
        <div className="icone-usuario">
          <div className="icone"></div>
          <div className="plus">+</div>
        </div>

        <form className="formulario">
          <label>Nome completo:</label>
          <input type="text" />

          <label>Localização:</label>
          <input type="text" />

          <label>E - Mail:</label>
          <input type="email" />

          <label>CPF:</label>
          <input type="text" />

          <label>Senha:</label>
          <input type="password" />

          <button type="submit" className="botao">
            Cadastrar
          </button>
        </form>
      </div>

      {/* Login */}
      <h2 className="titulo">Login</h2>
      <div className="card">
        <div className="icone-usuario">
          <div className="icone"></div>
          <div className="plus">+</div>
        </div>

        <form className="formulario">
          <label>E-mail</label>
          <input type="email" />

          <label>Senha:</label>
          <input type="password" />

          <button type="submit" className="botao">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}