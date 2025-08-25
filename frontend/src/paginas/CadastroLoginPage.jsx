 HEAD
import React from "react";
import Header from "./Header"; 
import "../CSS/CadastroLoginPage.css";
import React from 'react';
import '../CSS/CadastroLoginPage.css';
import Header from './Header';

export default function CadastroLoginPage() {
  return (
    <div className="page-container">
      <Header />

      {/* Cadastro */}
      <h2 className="section-title">Cadastro</h2>
      <div className="form-box">
        <div className="icon-container">
          <div className="icon-user"></div>
          <div className="icon-plus">+</div>
        </div>

        <form className="form-content">
          <label>Nome completo:</label>
          <input type="text" />

          <label>Localização:</label>
          <input type="text" />

          <label>E-mail:</label>
          <input type="email" />

          <label>CPF:</label>
          <input type="text" />

          <label>Senha:</label>
          <input type="password" />

          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </div>

      {/* Login */}
      <h2 className="section-title">Login</h2>
      <div className="form-box">
        <div className="icon-container">
          <div className="icon-user"></div>
          <div className="icon-plus">+</div>
        </div>

        <form className="form-content">
          <label>E-mail:</label>
          <input type="email" />

          <label>Senha:</label>
          <input type="password" />

          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}
