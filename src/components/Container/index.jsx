import { Template } from './styles';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <Template>
      {children}
    </Template>
  )
};

Container.propTypes = {
  children: PropTypes.node, 
};

export default Container