import { Title } from './styles';
import PropTypes from 'prop-types';

const MainTitle = ({ children, title }) => {

  return (
    <Title>
      <h3 className={title}>{children}</h3>
    </Title>
  )
}

MainTitle.propTypes = {
  children: PropTypes.node, 
  title: PropTypes.string
};

export default MainTitle;