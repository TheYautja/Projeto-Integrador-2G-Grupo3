import React from "react";
import Header from './Header'


export default function Dicaseoficina() {
  return (
    <div className="bg-white font-sans text-[#003311] min-h-screen flex flex-col">
      <Header />

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

        {/* Agenda com espiral */}
        <div className="flex items-start">
          {/* Espiral única com furos */}
          <div
            className="w-4 h-4 rounded-full bg-gray-400 mt-6 mr-3"
            style={{
              boxShadow: `
                0 28px 0 #9ca3af,
                0 56px 0 #9ca3af,
                0 84px 0 #9ca3af,
                0 112px 0 #9ca3af,
                0 140px 0 #9ca3af
              `
            }}
          ></div>

          {/* Bloco da agenda */}
          <div className="border-2 border-[#003311] p-6 bg-white shadow-md">
            <h3 className="text-base font-bold text-[#003311] mb-4">Agenda de oficinas</h3>
            <ul className="text-sm text-[#003311] underline leading-7">
              <li><a href="https://example.com/moveis">05/07 - Oficina de Móveis (Concórdia - SC)</a></li>
              <li><a href="https://example.com/costura">08/07 - Oficina de Costura (Online)</a></li>
              <li><a href="https://example.com/brinquedo">15/08 - Oficina de Brinquedo (Capinzal - SC)</a></li>
            </ul>
          </div>
        </div>

        {/* Vídeos */}
        <div>
          <h3 className="text-base font-bold text-[#003311] mb-4">Vídeos</h3>
          <ul className="space-y-4 text-sm text-[#003311]">
            <li className="flex items-center gap-2">
              {/* Ícone câmera */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#003311">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.5-3v9l-4.5-3m-2.25 3H5.25A2.25 2.25 0 013 14.25v-4.5A2.25 2.25 0 015.25 7.5h8.25a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 01-2.25 2.25z" />
              </svg>
              <a href="https://example.com/video1">Restaurando uma camisa que não uso mais</a>
            </li>
            <li className="flex items-center gap-2">
              {/* Ícone câmera */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#003311">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.5-3v9l-4.5-3m-2.25 3H5.25A2.25 2.25 0 013 14.25v-4.5A2.25 2.25 0 015.25 7.5h8.25a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 01-2.25 2.25z" />
              </svg>
              <a href="https://example.com/video2">Restaurando minha estante</a>
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

