import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import "../CSS/EnviarProduto.css";
import ondasVerdes from "../assets/fundo.png";

const url = "http://localhost:5000"; 

function EnviarProduto() {
  const [FormState, setFormState] = useState({
    nome: "",
    categoria: "",
    condicao: "",
    preco: "",
    descricao: "",
    localizacao: "",
    fotos: []
  });

  const [produtos, setProdutos] = useState([]); 
  const [fotoZoom, setFotoZoom] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormState((prev) => {
      const novasFotos = [...prev.fotos, ...files];
      if (novasFotos.length > 10) {
        alert("Você só pode adicionar até 10 fotos");
        return prev;
      }
      return { ...prev, fotos: novasFotos };
    });
  };


  const removeFoto = (index) => {
    setFormState((prev) => ({
      ...prev,
      fotos: prev.fotos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      Object.keys(FormState).forEach((key) => {
        if (key === "fotos") {
          FormState.fotos.forEach((foto) => data.append("fotos", foto));
        } else {
          data.append(key, FormState[key]);
        }
      });

      const response = await axios.post(`${url}/produtos`, data);

      setProdutos((prev) => [
        ...prev,
        {
          ...FormState,
          fotosPreview: FormState.fotos.map((f) => URL.createObjectURL(f))
        }
      ]);

      setFormState({
        nome: "",
        categoria: "",
        condicao: "",
        preco: "",
        descricao: "",
        localizacao: "",
        fotos: []
      });

      alert("Produto cadastrado com sucesso!");
      console.log("Resposta do servidor:", response.data);

    } catch (error) {
      if (error.response) {
        console.error("Erro do servidor:", error.response.data);
      } else if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
      } else {
        console.error("Erro inesperado:", error.message);
      }
      alert("Erro ao enviar produto. Veja o console.");
    }
  };

  return (
    <div>
      <Header />
      <section className="corpo">
        <h2>Enviar produto para vender</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Nome do produto:
            <input
              type="text"
              name="nome"
              value={FormState.nome}
              onChange={handleChange}
              placeholder="Preencha aqui"
              required
            />
          </label>
          <label>
            Categoria:
            <input
              type="text"
              name="categoria"
              value={FormState.categoria}
              onChange={handleChange}
              placeholder="Preencha aqui"
              required
            />
          </label>
          <label>
            Condição:
            <input
              type="text"
              name="condicao"
              value={FormState.condicao}
              onChange={handleChange}
              placeholder="Preencha aqui"
              required
            />
          </label>
          <label>
            Preço sugerido:
            <input
              type="number"
              name="preco"
              value={FormState.preco}
              onChange={handleChange}
              placeholder="Preencha aqui"
              required
            />
          </label>

          <label htmlFor="foto" className="botao-foto">
            Fotos (upload)
          </label>
          <input
            id="foto"
            type="file"
            name="fotos"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <div className="preview-fotos">
            {FormState.fotos.map((foto, index) => (
              <div key={index} className="foto-container">
                <img
                  src={URL.createObjectURL(foto)}
                  alt={`foto-${index}`}
                  onClick={() => setFotoZoom(URL.createObjectURL(foto))}
                />
                  ✖
              </div>
            ))}
          </div>

          {fotoZoom && (
            <div className="foto-zoom" onClick={() => setFotoZoom(null)}>
              <img src={fotoZoom} alt="zoom" />
            </div>
          )}

          <label>
            Descrição
            <input
              type="text"
              name="descricao"
              value={FormState.descricao}
              onChange={handleChange}
              placeholder="Preencha aqui"
              required
            />
          </label>
          <label>
            Cidade
            <input
              type="text"
              name="localizacao"
              value={FormState.localizacao}
              onChange={handleChange}
              placeholder="Preencha aqui"
              required
            />
          </label>

          <button type="submit">Anunciarar Produto</button>
        </form>

        <div className="lista-produtos">
          {produtos.map((p, index) => (
            <div key={index} className="produto-card">
              {p.fotosPreview?.[0] && (
                <img src={p.fotosPreview[0]} alt="foto-produto" />
              )}
              <h3>{p.nome}</h3>
              <p><strong>Preço:</strong> R${p.preco}</p>
              <p><strong>Descrição:</strong> {p.descricao}</p>
              <p><strong>Cidade:</strong> {p.localizacao}</p>
            </div>
          ))}
        </div>

        <img className="ondas" src={ondasVerdes} alt="fundo" />
      </section>
    </div>
  );
}

export default EnviarProduto;
