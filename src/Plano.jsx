export default function Plano({ dados }) {

    return (
        <>
            {
                dados.map((pegaDados, index) => (
                    <div
                        className="skill-card"
                        key={index}
                        style={
                            {
                                backgroundColor: pegaDados.color
                            }
                        }
                    >
                      <div>
                        <h5>{pegaDados.titulo}</h5> 
                      </div>
                        <button type='button'>{pegaDados.botao}</button>
                    </div>
                ))
            }
  
        </>
  
    )
  }