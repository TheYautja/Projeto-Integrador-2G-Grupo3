import {Routes , Route} from "react-router-dom";
import './App.css'
import Homepage from './paginas/Homepage'

function App (){
  return(
    <Routes>
      <Route path="./src/paginas/Homepage.jsx" element={<Homepage />} />
    </Routes>
  )
}

export default App;
