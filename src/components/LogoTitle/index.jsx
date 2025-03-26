import PropTypes from 'prop-types';
import { Title } from './styles';

const LogoTitle = ({ animation }) => {

  const isAnimated = animation === 'slide-down';

  return (
    <Title>
      <h3 className={isAnimated ? "logo-title slide-down" : "logo-title"}><span className="logo-text">Alvo<i
        className="fa-solid fa-location-crosshairs"></i>Concreto</span>
      </h3>
    </Title>
  )
}

LogoTitle.propTypes = {
  animation: PropTypes.node,
};

export default LogoTitle