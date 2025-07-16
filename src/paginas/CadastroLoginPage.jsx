import React, { useState } from 'react';
import './CadastroLoginPage.css';
import './CSS/CadastroLoginPage.css';

function CadastroPage() {
  const [cadastro, setCadastro] = useState({
    nome: '',
    localizacao: '',
    email: '',
    cpf: '',
    senha: ''
  });

  const [login, setLogin] = useState({
    email: '',
    senha: ''
  });

  const handleCadastroChange = (e) => {
    const { name, value } = e.target;
    setCadastro({ ...cadastro, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro realizado:', cadastro);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login realizado:', login);
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <nav className="nav">
          <a href="#" className="active">INÍCIO</a>
          <a href="#">PRODUTOS</a>
          <a href="#">VENDER</a>
          <a href="#">DICAS E OFICINAS</a>
        </nav>
        <div className="icons">
          <img src="/cart.svg" alt="Carrinho" />
          <img src="/profile.svg" alt="Perfil" />
        </div>
      </header>

      <main className="main">
        <section className="form-section">
          <h2>Cadastro</h2>
          <form onSubmit={handleCadastroSubmit} className="form">
            <div className="form-icon">
              <img src="/user-add.svg" alt="Adicionar usuário" />
            </div>
            <input type="text" name="nome" placeholder="Nome completo:" value={cadastro.nome} onChange={handleCadastroChange} />
            <input type="text" name="localizacao" placeholder="Localização:" value={cadastro.localizacao} onChange={handleCadastroChange} />
            <input type="email" name="email" placeholder="E-mail:" value={cadastro.email} onChange={handleCadastroChange} />
            <input type="text" name="cpf" placeholder="CPF:" value={cadastro.cpf} onChange={handleCadastroChange} />
            <input type="password" name="senha" placeholder="Senha:" value={cadastro.senha} onChange={handleCadastroChange} />
            <button type="submit">Cadastrar</button>
          </form>
        </section>

        <section className="form-section">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit} className="form">
            <div className="form-icon">
              <img src="/user-add.svg" alt="Usuário" />
            </div>
            <input type="email" name="email" placeholder="E-mail:" value={login.email} onChange={handleLoginChange} />
            <input type="password" name="senha" placeholder="Senha:" value={login.senha} onChange={handleLoginChange} />
            <button type="submit">Entrar</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <img src="/leaf.svg" alt="Ícone folha" />
        <img src="/instagram.svg" alt="Instagram" />
        <img src="/profile.svg" alt="Perfil" />
      </footer>
    </div>
  );
}

export default CadastroPage;