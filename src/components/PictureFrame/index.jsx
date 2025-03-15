import { Picture } from './styles';
import PropTypes from 'prop-types';

const PictureFrame = ({children}) => {
  return (
    <Picture>{children}</Picture>
  )
}

PictureFrame.propTypes = {
  children: PropTypes.node, 
};

export default PictureFrame;