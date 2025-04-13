import { InputArea } from './styles';
import PropTypes from 'prop-types';

const CalculatorInputNumber = ({ children, label, placeholder, value, setValue }) => {

  return (
    <InputArea>
      <label htmlFor={label} className="form-label">{children}</label>
      <input 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      type='number' id={label}
      className="form-control input-custom-number"
      step='0.1' required />
    </InputArea>
  )
}

CalculatorInputNumber.propTypes = {
  children: PropTypes.node,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
};

export default CalculatorInputNumber;