import { InputArea } from './styles';
import PropTypes from 'prop-types';

const CalculatorInputText = ({ children, label, placeholder }) => {

  return (
    <InputArea>
      <label htmlFor={label} className="form-label">{children}</label>
      <input placeholder={placeholder} type='text' id={label} className="form-control input-custom-text" required />
    </InputArea>
  )
}

CalculatorInputText.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  placeholder: PropTypes.node,
};

export default CalculatorInputText;