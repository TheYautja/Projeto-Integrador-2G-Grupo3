import React, { useState } from 'react';
import Header from './Header';
import '../CSS/CadastroLoginPage.css';

export default function CadastroLoginPage() {
  return (
    <div className="cadastro-login-container">
      
      {/* Cadastro */}
      <div className="form-box">
        <h2 className="titulo">Cadastro</h2>
        <div className="form-card">
          {/* Ícone */}
          <div className="icon-wrapper">
            <div className="icon-circle">
              <span className="icon-user">👤</span>
              <div className="icon-add">＋</div>
            </div>
          </div>

          {/* Formulário Cadastro */}
          <form className="form">
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
      </div>

      {/* Login */}
      <div className="form-box">
        <h2 className="titulo">Login</h2>
        <div className="form-card">
          {/* Ícone */}
          <div className="icon-wrapper">
            <div className="icon-circle">
              <span className="icon-user">👤</span>
              <div className="icon-add">＋</div>
            </div>
          </div>

          {/* Formulário Login */}
          <form className="form">
            <label>E-mail:</label>
            <input type="email" />

            <label>Senha:</label>
            <input type="password" />

            <button type="submit" className="btn">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}