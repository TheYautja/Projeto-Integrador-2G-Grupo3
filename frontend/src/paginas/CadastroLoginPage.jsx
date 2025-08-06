import React, { useState } from 'react';
import Header from './Header';
import '../CSS/CadastroLoginPage.css';

export default function CadastroPage() {
  const [cadastro, setCadastro] = useState({
    nome: '',
    localizacao: '',
    email: '',
    cpf: '',
    senha: ''
  });

  const handleCadastroChange = (e) => {
    const { name, value } = e.target;
    setCadastro({ ...cadastro, [name]: value });
  };

  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro realizado:', cadastro);
  };

  return (
    <div className="page">
      <Header />

      <main className="center">
        <section className="card">
          <div className="avatarWrap">
            <img className="avatar" src="/assests/icon.png" alt="Usuário" />
            <img className="avatarPlus" src="/add-circle.svg" alt="Adicionar" />
          </div>

          <h2 className="title">Cadastro</h2>

          <form onSubmit={handleCadastroSubmit} className="form">
            <label className="label">Nome completo:</label>
            <input
              className="input"
              type="text"
              name="nome"
              value={cadastro.nome}
              onChange={handleCadastroChange}
            />

            <label className="label">Localização:</label>
            <input
              className="input"
              type="text"
              name="localizacao"
              value={cadastro.localizacao}
              onChange={handleCadastroChange}
            />

            <label className="label">E - Mail:</label>
            <input
              className="input"
              type="email"
              name="email"
              value={cadastro.email}
              onChange={handleCadastroChange}
            />

            <label className="label">CPF:</label>
            <input
              className="input"
              type="text"
              name="cpf"
              value={cadastro.cpf}
              onChange={handleCadastroChange}
            />

            <label className="label">Senha:</label>
            <input
              className="input"
              type="password"
              name="senha"
              value={cadastro.senha}
              onChange={handleCadastroChange}
            />

            <button type="submit" className="btnPrimary">Cadastrar</button>
          </form>
        </section>
      </main>
    </div>
  );
}
