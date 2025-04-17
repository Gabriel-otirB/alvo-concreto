import { ButtonArea } from './styles';
import PropTypes from 'prop-types';

const CalculatorButton = ({ result, onClick }) => {

  return (
    <ButtonArea>
      <button type="button" className="btn btn-custom" onClick={onClick}>
        {result ? 'Calcular Novamente' : 'Calcular Volume'}
      </button>
    </ButtonArea>
  );

}

CalculatorButton.propTypes = {
  result: PropTypes.node,
  onClick: PropTypes.func,
};

export default CalculatorButton;