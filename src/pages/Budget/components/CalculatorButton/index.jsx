import { ButtonArea } from './styles';
import PropTypes from 'prop-types';

const CalculatorButton = ({ result }) => {

  return result === 0 ? (
    <ButtonArea>
      <button type="button" className="btn btn-custom">Calcular</button>
    </ButtonArea>
  ) : (
    <ButtonArea>
      <button type="button" className="btn btn-custom">Calcular novamente</button>
    </ButtonArea>
  );

}

CalculatorButton.propTypes = {
  result: PropTypes.node
};

export default CalculatorButton;