import {Routes , Route, BrowserRouter} from "react-router-dom";
import './App.css'
import Homepage from './paginas/Homepage'
import ProdutoIndividual from "./paginas/ProdutoIndividual";

function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/ProdutoIndividual" element={<ProdutoIndividual />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
