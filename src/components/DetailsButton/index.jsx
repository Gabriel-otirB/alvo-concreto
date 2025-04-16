import { Button } from './styles';
import PropTypes from 'prop-types';

const DetailsButton = ({ children }) => {
  return (
    <Button>{children}</Button>
  );
}

DetailsButton.propTypes = {
  children: PropTypes.string, 
};


export default DetailsButton;