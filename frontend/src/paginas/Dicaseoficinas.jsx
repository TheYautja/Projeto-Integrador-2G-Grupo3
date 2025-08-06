import React from "react";

export default function Dicaseoficina() {
  return (
    <div className="bg-white font-sans text-[#003311] min-h-screen flex flex-col">
      {/* Menu superior */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <div className="flex items-center gap-14 text-sm font-semibold">
          <span className="border-b-2 border-[#003311] pb-1">INÍCIO</span>
          <span>PRODUTOS</span>
          <span>VENDER</span>
          <span>DICAS E OFICINAS</span>
        </div>
        <div className="flex gap-6 items-center">
          {/* Ícone carrinho */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#003311" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a.75.75 0 01.74.635l.637 4.453a.75.75 0 00.74.635h12.52a.75.75 0 01.74.865l-.845 5.07a.75.75 0 01-.74.635H7.151a.75.75 0 01-.74-.635L5.63 12m1.622 6.75a.75.75 0 100 1.5.75.75 0 000-1.5zm10.5 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
          </svg>

          {/* Ícone usuário */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#003311" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="flex-grow px-6 py-10 max-w-[1000px] mx-auto space-y-10">
        <h2 className="text-2xl font-bold text-[#003311]">Dicas e oficinas</h2>

        <div className="text-[#003311] space-y-2">
          <p>
            <span className="mr-2">🪚</span>
            oficina em destaque: <span className="font-bold">“Restauração de madeira”</span>
          </p>
          <p>
            <span className="mr-2">🎨</span>
            dica criativa: <span className="font-bold">“Roupa tie-dye com sobras de tecido”</span>
          </p>
        </div>

        {/* Agenda com argolas */}
        <div className="flex items-start">
          {/* Argolas */}
          <div className="flex flex-col gap-4 mt-2 mr-2">
            {Array(6).fill().map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full border-4 border-gray-500"></div>
            ))}
          </div>

          {/* Bloco da agenda */}
          <div className="border-2 border-[#003311] p-6 bg-white shadow-md rounded-md">
            <h3 className="text-base font-bold text-[#003311] mb-4">Agenda de oficinas</h3>
            <ul className="text-sm text-[#003311] underline leading-7">
              <li><a href="#">05/07 - Oficina de Móveis (Concórdia - SC)</a></li>
              <li><a href="#">08/07 - Oficina de Costura (Online)</a></li>
              <li><a href="#">15/08 - Oficina de Brinquedo (Capinzal - SC)</a></li>
            </ul>
          </div>
        </div>

        {/* Vídeos */}
        <div>
          <h3 className="text-base font-bold text-[#003311] mb-4">Vídeos</h3>
          <ul className="space-y-4 text-sm text-[#003311]">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#003311] rounded-sm">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" stroke="#003311" strokeWidth="2" />
                </svg>
              </span>
              Restaurando uma camisa que não uso mais
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#003311] rounded-sm">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" stroke="#003311" strokeWidth="2" />
                </svg>
              </span>
              Restaurando minha estante
            </li>
          </ul>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="flex justify-between items-center px-6 py-4 border-t border-gray-300 mt-10">
        <img src="/icone-folha.svg" alt="folha" className="w-6 h-6" />
        <img src="/icone-perfil.svg" alt="perfil" className="w-6 h-6" />
      </footer>
    </div>
  );
}

