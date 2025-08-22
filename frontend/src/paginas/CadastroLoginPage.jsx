import React, { useState } from "react";
import axios from "axios";
import '../CSS/CadastroLoginPage.css';
import Header from './Header';


const url = "http://localhost:5000";


export default function CadastroLoginPage() {
  const [formCadastro, setFormCadastro] = useState({ nome:"", email:"", senha:"", localizacao:"", cpf:"" });
  const [formLogin, setFormLogin] = useState({ email: "", senha: "" });
  const [mostrarLogin, setmostrarLogin] = useState(false);
 


  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/usuarios`, formCadastro);
      alert("cadastro bem sucedido");
      setmostrarLogin(true);
    } catch (err) {
      console.error(err);
      alert("erro no cadastro: ");}};
    

  



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/login`, formLogin, { withCredentials: true });
      alert(`logado, voce sera redirecionado em breve, usuario ${res.data.user_id}`);
    } catch (err) {
      console.error(err.response?.data);
      alert("login fracassado");
    }};
  



  return (
    <div>
      <Header />

      {!mostrarLogin ? (
        <>
          <h2>Cadastro</h2>

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
            <button type="submit">cadastrar</button>
          </form> </> ) : (

        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>email</label>
            <input type="email" onChange={e => setFormLogin({...formLogin, email:e.target.value})} required />
            <label>senha</label>
            <input type="password" onChange={e => setFormLogin({...formLogin, senha:e.target.value})} required />
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
    );}
