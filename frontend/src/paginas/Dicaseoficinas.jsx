import React from "react";
import Header from './Header'; // Deixe se seu projeto usar Header separado

export default function Dicaseoficina() {
  return (
    <div className="bg-white font-sans text-gray-900 min-h-screen flex flex-col">
      {/* Menu superior */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-300">
        <div className="flex gap-10 items-center text-sm font-semibold">
          <span className="text-green-900">INÍCIO</span>
          <span className="text-green-900">PRODUTOS</span>
          <span className="text-green-900">VENDER</span>
          <span className="text-green-900">DICAS E OFICINAS</span>
        </div>

        <div className="flex items-center gap-5">
          {/* Ícone carrinho */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a.75.75 0 01.74.635l.637 4.453a.75.75 0 00.74.635h12.52a.75.75 0 01.74.865l-.845 5.07a.75.75 0 01-.74.635H7.151a.75.75 0 01-.74-.635L5.63 12m1.622 6.75a.75.75 0 100 1.5.75.75 0 000-1.5zm10.5 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
          </svg>

          {/* Ícone usuário */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-grow px-8 py-10 space-y-10 max-w-screen-md mx-auto">
        {/* Título e dicas */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-green-900">Dicas e oficinas</h2>

          <div className="space-y-3 text-base text-green-900">
            <p>
              <span className="inline-block mr-2">🪚</span>
              oficina em destaque: <span className="font-bold">“Restauração de madeira”</span>
            </p>
            <p>
              <span className="inline-block mr-2">🎨</span>
              dica criativa: <span className="font-bold">“Roupa tie-dye com sobras de tecido”</span>
            </p>
          </div>
        </section>

        {/* Agenda com estilo caderno */}
        <section className="flex items-start">
          {/* Argolas estilo caderno */}
          <div className="flex flex-col justify-between mr-2 py-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-4 h-4 border-4 border-gray-500 rounded-full mb-2"></div>
            ))}
          </div>

          <div className="border-2 border-green-800 rounded-md px-6 py-4 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-green-900 mb-4">Agenda de oficinas</h3>
            <ul className="space-y-2 text-sm text-green-900 underline">
              <li>
                <a href="#">05/07 - Oficina de Móveis (Concórdia - SC)</a>
              </li>
              <li>
                <a href="#">08/07 - Oficina de Costura (Online)</a>
              </li>
              <li>
                <a href="#">15/08 - Oficina de Brinquedo (Capinzal - SC)</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Vídeos */}
        <section>
          <h3 className="text-lg font-bold text-green-900 mb-4">Vídeos</h3>
          <ul className="space-y-3 text-sm text-green-900">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-green-800 rounded-sm flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" stroke="green" strokeWidth="2" />
                </svg>
              </span>
              Restaurando uma camisa que não uso mais
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-green-800 rounded-sm flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" stroke="green" strokeWidth="2" />
                </svg>
              </span>
              Restaurando minha estante
            </li>
          </ul>
        </section>
      </main>

      {/* Rodapé (vazio como na imagem) */}
      <footer className="w-full bg-white border-t border-gray-300 px-10 py-3 flex justify-between items-center">
        {/* Você pode adicionar ícones ou texto aqui se quiser */}
      </footer>
    </div>
  );
}
