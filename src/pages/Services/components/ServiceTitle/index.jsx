import { Title } from './styles';
import PropTypes from 'prop-types';

const ServiceTitle = ({ children, title }) => {

  return (
    <Title>
      <h3 className={title}>{children}</h3>
    </Title>
  )
}

ServiceTitle.propTypes = {
  children: PropTypes.node, 
  title: PropTypes.string
};

export default ServiceTitle;