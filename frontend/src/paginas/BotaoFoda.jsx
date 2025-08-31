import "../CSS/BotaoFoda.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function BotaoFoda({ onClick }) {
  return (
    <button className="botaoArvores" onClick={onClick}>
      Comece Agora
      <span className="arvores">
        <i className="fas fa-tree A1"></i>
        <i className="fas fa-tree A2"></i>
        <i className="fas fa-tree A3"></i>
      </span>
    </button>
  );
}

export default BotaoFoda;
