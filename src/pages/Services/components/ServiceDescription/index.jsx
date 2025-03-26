import { Description } from './styles'
import PropTypes from 'prop-types';


const TalkButton = ({ servicesList, side }) => {

  const isInverted = side === 'inverting';

  return (
    <Description>
      <ul className={!isInverted ? "service-benefits" : "service-benefits-2"}>
        <li><i className={servicesList.firstService.icon}></i>{servicesList.firstService.title}</li>
        <li><i className={servicesList.secondService.icon}></i>{servicesList.secondService.title}</li>
        <li><i className={servicesList.thirdService.icon}></i>{servicesList.thirdService.title}</li>
      </ul>
    </Description>
  )
}

TalkButton.propTypes = {
  servicesList: PropTypes.node,
  side: PropTypes.node,
};

export default TalkButton;