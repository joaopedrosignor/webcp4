import Plano from "./Plano";

function Planos({ planos }) {

  const planos = [
    {
      titulo: "Individual",
      botao: "Cadastrar",
      color: "#6975e8"
    },
    {
      titulo: "Profissional - Times",
      botao: "Cadastrar"
    },
    {
      titulo: "Corporativo",
      botao: "Entre Em Contato"
    }
  ]

  return (
    <div className="cards">
      <h2>Planos</h2>
      <Plano dados={planos} />
    </div>
  );
}

export default Planos;