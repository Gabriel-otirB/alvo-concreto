import { Text } from './styles';
import PropTypes from 'prop-types';

const ContentText = ({ children }) => {
  return (
    <Text>
      {children}
    </Text>
  )
}

ContentText.propTypes = {
  children: PropTypes.node, 
};

export default ContentText