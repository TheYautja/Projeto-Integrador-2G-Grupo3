import {Routes , Route, BrowserRouter} from "react-router-dom";
import './App.css'
import Homepage from './paginas/Homepage'
import ProdutoIndividual from "./paginas/ProdutoIndividual";
import Dicaseoficinas from './paginas/Dicaseoficinas';
import Catalogo from "./paginas/Catalogo_de_produtos";
import EnviarProduto from "./paginas/Enviarproduto";
import Cadastro from "./paginas/CadastroLoginPage";
import Carrinho from "./paginas/Carrinho";


function App (){
  return(

    <BrowserRouter>
      <Routes>
           <Route path="/" element ={<Homepage />}/>
           <Route path="/ProdutoIndividual" element={<ProdutoIndividual />} />
           <Route path="/Dicaseoficinas" element={<Dicaseoficinas />} />
           <Route path="/Catalogo_de_produtos" element={<Catalogo />} />
           <Route path="/Enviarproduto" element={<EnviarProduto />} />
           <Route path="/CadastroLoginPage" element={<Cadastro />} />
           <Route path="/Carrinho" element={<Carrinho />} />
           <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
