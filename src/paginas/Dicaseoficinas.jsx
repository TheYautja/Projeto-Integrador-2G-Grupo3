import React from "react";
import { FaHammer, FaLeaf, FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function DicasOficinas() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col justify-between">
      {/* Top nav */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-300">
        <div className="flex gap-10 items-center text-sm font-semibold">
          <IoMdHome className="text-xl" />
          <span>MENU</span>
          <span>PRODUTOS</span>
          <span>VENDER</span> {/* ← CORRIGIDO AQUI */}
          <span>DICAS E OFICINAS</span>
        </div>
        <div className="flex items-center gap-5">
          <FiSearch className="text-xl" />
          <FaUser className="text-xl" />
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-grow p-10 space-y-10">
        {/* Título e dicas */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Dicas e oficinas</h2>

          <div className="space-y-3 text-base">
            <p className="flex items-center gap-2">
              <FaHammer className="text-gray-600" />
              oficina em destaque:&nbsp;
              <span className="font-bold text-green-800">“Restauração de madeira”</span>
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineLightbulb className="text-yellow-500" />
              dica criativa:&nbsp;
              <span className="font-bold text-green-800">“Roupa tie-dye com sobras de tecido”</span>
            </p>
          </div>
        </section>

        {/* Agenda */}
        <section className="relative w-fit">
          {/* Ganchos laterais simulando caderno */}
          <div className="absolute -left-6 top-4 bottom-4 flex flex-col justify-between">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-5 border-l-4 border-gray-700 rounded-r-full" />
            ))}
          </div>

          <div className="border-2 border-green-800 p-6 pl-10 pr-8 rounded-md bg-white">
            <h3 className="text-lg font-bold text-green-800 mb-4">Agenda de oficinas</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-green-900 underline">
                  05/07 - Oficina de Móveis (Concórdia - SC)
                </a>
              </li>
              <li>
                <a href="#" className="text-green-900 underline">
                  08/07 - Oficina de Costura (Online)
                </a>
              </li>
              <li>
                <a href="#" className="text-green-900 underline">
                  15/08 - Oficina de Brinquedo (Capinzal - SC)
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Vídeos */}
        <section>
          <h3 className="text-lg font-bold mb-4">Vídeos</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-green-700 w-4 h-4" />
                Restaurando uma camisa que não uso mais
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-green-700 w-4 h-4" />
                Restaurando minha estante
              </label>
            </li>
          </ul>
        </section>
      </main>

      {/* Rodapé fixo */}
      <footer className="w-full bg-white border-t border-gray-300 px-10 py-3 flex justify-between items-center">
        <FaLeaf className="text-green-700 text-xl" />
        <FaUser className="text-gray-700 text-xl" />
      </footer>
    </div>
  );
}