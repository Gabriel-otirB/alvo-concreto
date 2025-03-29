import { Picture } from './styles';
import PropTypes from 'prop-types';

const ContactPicture = ({children}) => {
  return (
    <Picture>{children}</Picture>
  )
}

ContactPicture.propTypes = {
  children: PropTypes.node, 
};

export default ContactPicture;