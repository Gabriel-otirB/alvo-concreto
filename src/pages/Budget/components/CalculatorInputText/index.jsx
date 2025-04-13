import { InputArea } from './styles';
import PropTypes from 'prop-types';

const CalculatorInputText = ({ children, label, placeholder, customConcreting, handleCustomConcreting }) => {

  return (
    <InputArea>
      <label htmlFor={label} className="form-label">{children}</label>
      <input
        value={customConcreting}
        onChange={(e) => handleCustomConcreting(e.target.value)}
        placeholder={placeholder}
        type='text'
        id={label}
        className="form-control input-custom-text"
        required />
    </InputArea>
  )
}

CalculatorInputText.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  customConcreting: PropTypes.string,
  handleCustomConcreting: PropTypes.func,
};


export default CalculatorInputText;