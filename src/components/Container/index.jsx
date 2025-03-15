import { Template } from './styles';
import Line from '../../components/Line';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <Template>
      {children}
      <Line />
    </Template>
  )
};

Container.propTypes = {
  children: PropTypes.node, 
};

export default Container