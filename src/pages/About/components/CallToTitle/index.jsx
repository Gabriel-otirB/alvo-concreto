import { Title } from './styles';
import PropTypes from 'prop-types';

const CallToTitle = ({ children, title }) => {

  return (
    <Title>
      <h3 className={title}>{children}</h3>
    </Title>
  )
}

CallToTitle.propTypes = {
  children: PropTypes.node, 
  title: PropTypes.node
};

export default CallToTitle;