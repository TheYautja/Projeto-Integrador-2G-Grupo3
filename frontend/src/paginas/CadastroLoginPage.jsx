import React from "react";
import Header from "../Header";

export default function CadastroLoginPage() {
  return (
    <div className="flex flex-col items-start px-16 py-6">
      <Header />

      {/* Cadastro */}
      <h2 className="text-green-900 font-bold mt-6 mb-2 text-lg">Cadastro</h2>
      <div className="border border-green-900 rounded-lg p-6 w-96 mb-10">
        <div className="flex justify-center items-center relative mb-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-0 right-[140px] bg-white border-2 border-green-900 rounded-full px-2 text-green-900 font-bold">
            +
          </div>
        </div>

        <form className="flex flex-col gap-2">
          <label className="text-sm font-medium">Nome completo:</label>
          <input
            type="text"
            className="border border-gray-400 rounded p-1"
          />

          <label className="text-sm font-medium">Localização:</label>
          <input
            type="text"
            className="border border-gray-400 rounded p-1"
          />

          <label className="text-sm font-medium">E-mail:</label>
          <input
            type="email"
            className="border border-gray-400 rounded p-1"
          />

          <label className="text-sm font-medium">CPF:</label>
          <input
            type="text"
            className="border border-gray-400 rounded p-1"
          />

          <label className="text-sm font-medium">Senha:</label>
          <input
            type="password"
            className="border border-gray-400 rounded p-1"
          />

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>

      {/* Login */}
      <h2 className="text-green-900 font-bold mt-6 mb-2 text-lg">Login</h2>
      <div className="border border-green-900 rounded-lg p-6 w-96 mb-10">
        <div className="flex justify-center items-center relative mb-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-0 right-[140px] bg-white border-2 border-green-900 rounded-full px-2 text-green-900 font-bold">
            +
          </div>
        </div>

        <form className="flex flex-col gap-2">
          <label className="text-sm font-medium">E-mail:</label>
          <input
            type="email"
            className="border border-gray-400 rounded p-1"
          />

          <label className="text-sm font-medium">Senha:</label>
          <input
            type="password"
            className="border border-gray-400 rounded p-1"
          />

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
