import { Title } from './styles';
import PropTypes from 'prop-types';

const CalculatorTitle = ({ children, title }) => {

  return (
    <Title>
      <h3 className={title}>{children}</h3>
    </Title>
  )
}

CalculatorTitle.propTypes = {
  children: PropTypes.node, 
  title: PropTypes.string
};

export default CalculatorTitle;