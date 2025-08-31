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

  const [fotoZoom, setFotoZoom] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "preco") {
      let novoValor = value.replace(/[^0-9,]/g, "");
      if (novoValor.includes(",")) {
        const partes = novoValor.split(",");
        partes[1] = partes[1]?.slice(0, 2);
        novoValor = partes.join(",");
      }
      setFormState((prev) => ({
        ...prev,
        [name]: novoValor
      }));
    } else {
      setFormState((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const formatarPreco = (valor) => {
    if (!valor) return "";
    let [inteiro, decimal] = valor.split(",");
    inteiro = inteiro.replace(/\D/g, "");
    inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return decimal !== undefined ? `${inteiro},${decimal}` : inteiro;
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
            <textarea
              name="nome"
              value={FormState.nome}
              onChange={handleChange}
              placeholder="Preencha aqui"
              rows={2}
              maxLength={50}
              required
            />
            <small>{FormState.nome.length} / 50</small>
          </label>

          <label>
            Categoria:
            <textarea
              name="categoria"
              value={FormState.categoria}
              onChange={handleChange}
              placeholder="Preencha aqui"
              rows={2}
              maxLength={50}
              required
            />
            <small>{FormState.categoria.length} / 50</small>
          </label>

          <label>
            Condição:
            <textarea
              name="condicao"
              value={FormState.condicao}
              onChange={handleChange}
              placeholder="Preencha aqui"
              rows={2}
              maxLength={50}
              required
            />
            <small>{FormState.condicao.length} / 50</small>
          </label>

          <label>
            Preço sugerido:
            <textarea
              name="preco"
              value={formatarPreco(FormState.preco)}
              onChange={handleChange}
              placeholder="Ex: 1.200,50"
              rows={1}
              maxLength={20}
              required
            />
            <small>{FormState.preco.length} / 20</small>
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
                <span
                  className="remover-foto"
                  onClick={() => removeFoto(index)}
                >
                  ✖
                </span>
              </div>
            ))}
          </div>

          {fotoZoom && (
            <div className="foto-zoom" onClick={() => setFotoZoom(null)}>
              <img src={fotoZoom} alt="zoom" />
            </div>
          )}

          <label>
            Descrição:
            <textarea
              name="descricao"
              value={FormState.descricao}
              onChange={handleChange}
              placeholder="Preencha aqui"
              rows={4}
              maxLength={300}
              required
            />
            <small>{FormState.descricao.length} / 300</small>
          </label>

          <label>
            Cidade:
            <textarea
              name="localizacao"
              value={FormState.localizacao}
              onChange={handleChange}
              placeholder="Preencha aqui"
              rows={2}
              maxLength={50}
              required
            />
            <small>{FormState.localizacao.length} / 50</small>
          </label>

          <button type="submit">Anunciar Produto</button>
        </form>



        <img className="ondas" src={ondasVerdes} alt="fundo" />
      </section>
    </div>
  );
}

export default EnviarProduto;
