import { InputArea } from './styles';
import PropTypes from 'prop-types';

const CalculatorInputNumber = ({ children, label, placeholder }) => {

  return (
    <InputArea>
      <label htmlFor={label} className="form-label">{children}</label>
      <input placeholder={placeholder} type='number' id={label} className="form-control input-custom-number" step='0.1' required />
    </InputArea>
  )
}

CalculatorInputNumber.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  placeholder: PropTypes.node,
};

export default CalculatorInputNumber;