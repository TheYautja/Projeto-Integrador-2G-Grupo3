import Header from './Header';

function ProdutoIndividual() {
  function changeImage(event) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = event.target.src;
  }

  function buyNow() {
    alert("Produto adicionado ao carrinho! (função de demonstração)");
  }

  return (
    <>
      <Header />
      <main className="flex flex-wrap max-w-6xl mx-auto gap-8 p-6 bg-white text-black font-sans">
        {/* Galeria de imagens */}
        <section className="flex-1 min-w-[300px]">
          <img
            id="mainImage"
            src="/images/iphone-principal.png"
            alt="iPhone 12 Verde"
            className="w-full rounded-2xl shadow-md"
          />
          <div className="flex gap-2 mt-4">
            <img
              src="/images/thumb1.png"
              alt="thumb1"
              className="w-1/3 rounded-xl cursor-pointer hover:scale-105 transition"
              onClick={changeImage}
            />
            <img
              src="/images/thumb2.png"
              alt="thumb2"
              className="w-1/3 rounded-xl cursor-pointer hover:scale-105 transition"
              onClick={changeImage}
            />
            <img
              src="/images/thumb3.png"
              alt="thumb3"
              className="w-1/3 rounded-xl cursor-pointer hover:scale-105 transition"
              onClick={changeImage}
            />
          </div>
        </section>

        {/* Informações do produto */}
        <section className="flex-1 min-w-[300px] bg-gray-50 rounded-2xl shadow-md p-6">
          <h1 className="text-xl font-semibold text-green-900 hover:underline">
            iPhone 12 Apple Verde 64GB
          </h1>
          <p className="text-2xl font-bold mt-2">R$ 1500,00</p>
          <p className="mt-2 text-sm text-gray-600">📍 Irani, Santa Catarina</p>
          <p className="text-sm text-gray-600">
            Vendedor:{' '}
            <a href="tel:+5549959525823" className="text-green-700">
              (49) 95952-5823
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Estado: <span className="font-medium">Reformado</span>
            <br />
            Impacto Ambiental evitado: 70–100 kg CO₂
          </p>

          <h2 className="font-bold text-md mt-4 mb-2">Descrição:</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Desempenho potente: Chip A14 Bionic e tela OLED de 6.1”</li>
            <li>Câmeras avançadas: Dupla de 12MP com modo Noite</li>
            <li>100% funcional: Testado, com bateria em ótimo estado</li>
            <li>Sustentável: Recondicionado, com até 55kg de CO₂ evitados</li>
            <li>Inclui: iPhone + cabo USB-C para Lightning</li>
            <li>Garantia: 90 dias + suporte técnico</li>
          </ul>

          <button
            onClick={buyNow}
            className="mt-6 w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-xl text-md"
          >
            Comprar agora
          </button>
        </section>
      </main>
    </>
  );
}

export default ProdutoIndividual;
