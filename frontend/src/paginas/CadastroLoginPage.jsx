import React, { useState, useRef } from "react";
import axios from "axios";
import '../CSS/CadastroLoginPage.css';
import Header from './Header';
import pfp from "../assets/pfpcadastro.png";

const url = "http://localhost:5000";

export default function CadastroLoginPage() {
  const [formCadastro, setFormCadastro] = useState({ nome:"", email:"", senha:"", localizacao:"", cpf:"" });
  const [formLogin, setFormLogin] = useState({ email: "", senha: "" });
  const [mostrarLogin, setmostrarLogin] = useState(false);

  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [previewPerfil, setPreviewPerfil] = useState(null);

  const fileInputRef = useRef(null);

  const handleFotoPerfilChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(file);
      setPreviewPerfil(URL.createObjectURL(file));
    }
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nome", formCadastro.nome);
      formData.append("email", formCadastro.email);
      formData.append("senha", formCadastro.senha);
      formData.append("localizacao", formCadastro.localizacao);
      formData.append("cpf", formCadastro.cpf);
      formData.append("endereco", formCadastro.endereco);
      formData.append("numero", formCadastro.numero);
      formData.append("Complemento", formCadastro.Complemento
      );
      formData.append("Bairro", formCadastro.Bairro);
      formData.append("CEP", formCadastro.CEP);
      formData.append("Cidade", formCadastro.Cidade);
      formData.append("Estado", formCadastro.Estado);
      if (fotoPerfil) formData.append("FotoPerfil", fotoPerfil);
    

      await axios.post(`${url}/usuarios`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("cadastro bem sucedido");
      setmostrarLogin(true);
    } catch (err) {
      console.error(err);
      alert("erro no cadastro");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/login`, formLogin, { withCredentials: true });
      alert(`logado, voce sera redirecionado em breve, usuario ${res.data.user_id}`);
    } catch (err) {
      console.error(err.response?.data);
      alert("login fracassado");
    }
  };

  return (
    <div>
      <Header />

      <div className="container">
        <div className="containerCard">

          {!mostrarLogin ? (
            <>
              <div className="containerPFP">
                <img
                  src={previewPerfil || pfp}
                  alt="profile"
                  className="pfp"
                  onClick={() => fileInputRef.current.click()}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFotoPerfilChange}
                />
              </div>

              <form onSubmit={handleCadastro}>
                <label>nome completo</label>
                <input type="text" onChange={e => setFormCadastro({...formCadastro, nome:e.target.value})} required />
                <label>localizacao</label>
                <input type="text" onChange={e => setFormCadastro({...formCadastro, localizacao:e.target.value})} required />
                <label>email</label>
                <input type="email" onChange={e => setFormCadastro({...formCadastro, email:e.target.value})} required />
                <label>cpf</label>
                <input type="text" onChange={e => setFormCadastro({...formCadastro, cpf:e.target.value})} required />
                <label>senha</label>
                <input type="password" onChange={e => setFormCadastro({...formCadastro, senha:e.target.value})} required />

                <button type="submit" className="submit-btn">Cadastrar</button>

                <button
                  type="button"
                  className="switch-btn"
                  onClick={() => setmostrarLogin(true)}
                >
                  Login
                </button>
              </form>
            </>
          ) : (
            <>
              <form onSubmit={handleLogin}>
                <label>email</label>
                <input type="email" onChange={e => setFormLogin({...formLogin, email:e.target.value})} required />
                <label>senha</label>
                <input type="password" onChange={e => setFormLogin({...formLogin, senha:e.target.value})} required />

                <button type="submit" className="submit-btn">Login</button>

                <button
                  type="button"
                  className="switch-btn"
                  onClick={() => setmostrarLogin(false)}
                >
                  cadastre-se
                </button>
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
