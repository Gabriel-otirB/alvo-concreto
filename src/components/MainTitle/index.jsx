import { Title } from './styles';
import PropTypes from 'prop-types';

const MainTitle = ({ children }) => {
  return (
    <Title>
      <h3 className="main-title">{children}</h3>
    </Title>
  )
}

MainTitle.propTypes = {
  children: PropTypes.node, 
};

export default MainTitle