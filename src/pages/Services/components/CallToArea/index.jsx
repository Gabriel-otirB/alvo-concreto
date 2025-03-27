import { CallToArea } from './styles'

const CallToAction = () => {

  return (
    <CallToArea>
      <div className="container">
        <div className="row">
          <p> Gostou dos nossos serviços? Solicite um orçamento sem compromisso! </p>
          <a href="orcamento.html" className="main-btn" id="call-btn">Solicitar Orçamento</a>
        </div>
      </div>
    </CallToArea>
  )
}

export default CallToAction;
