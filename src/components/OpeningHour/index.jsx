import { Schedule } from './styles';

const OpeningHour = () => {
  return (
    <Schedule>
      <h4>Horários de Atendimento</h4>
      <ul>
        <li>
          <i className="fas fa-clock"></i>
          <strong>Segunda a Sexta:</strong> 8h às 18h
        </li>
        <li>
          <i className="fas fa-clock"></i>
          <strong>Sábado:</strong> 8h às 12h
        </li>
      </ul>
    </Schedule>
  )
}

export default OpeningHour;